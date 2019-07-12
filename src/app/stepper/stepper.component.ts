import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatStepper } from '@angular/material'
import { Subscription } from 'rxjs'
import { AppService, ValidateRequest } from '../app.service'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements AfterViewInit, OnDestroy {
  stepperForm: FormGroup
  images: string[] = []
  state: 'loading' | 'success' | 'error' | 'default'

  private camAccess: boolean
  private step1Changes: Subscription
  private step2Changes: Subscription
  private step3Changes: Subscription

  @ViewChild('stepper') stepper: MatStepper

  constructor(private formBuilder: FormBuilder, private service: AppService) {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      devices
        .filter(device => device.kind === 'videoinput')
        .forEach(device => {
          if (device.label !== '') this.camAccess = true
        })
    })
    this.stepperForm = this.formBuilder.group({
      step1: [false, Validators.requiredTrue],
      step2: [false, Validators.requiredTrue],
      step3: [false, Validators.requiredTrue]
    })
  }

  ngAfterViewInit() {
    this.step1Changes = this.stepperForm.controls.step1.statusChanges.subscribe(
      status => {
        if (status === 'VALID') {
          if (this.camAccess) {
            this.stepperForm.controls.step2.setValue(true)
            this.stepper.selectedIndex = 2
          } else this.stepper.next()
        }
      }
    )
    this.step2Changes = this.stepperForm.controls.step2.statusChanges.subscribe(
      status => {
        if (status === 'VALID') this.stepper.next()
      }
    )
    this.step3Changes = this.stepperForm.controls.step3.statusChanges.subscribe(
      status => {
        if (status === 'VALID') {
          this.state = 'default'
          this.stepper.next()
        }
      }
    )
  }

  ngOnDestroy(): void {
    if (this.step1Changes) this.step1Changes.unsubscribe()
    if (this.step2Changes) this.step2Changes.unsubscribe()
    if (this.step3Changes) this.step3Changes.unsubscribe()
  }

  getCamAccess() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => this.stepperForm.controls.step2.setValue(true))
  }

  validate() {
    this.state = 'loading'
    const body: ValidateRequest = {
      uid: 'yeeeha',
      pics: this.images.map(pic => pic.split(',')[1])
    }
    this.service.validate(body).subscribe(response => {
      console.log(response)
      if (
        response.registrationErrorList &&
        response.registrationErrorList.length
      ) {
        this.state = 'error'
      } else this.state = 'success'
      // this.state = 'success'
    })
  }
}
