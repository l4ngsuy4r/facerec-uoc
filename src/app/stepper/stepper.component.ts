import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatStepper } from '@angular/material'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements AfterViewInit, OnDestroy {
  stepperForm: FormGroup

  private camAccess: boolean
  private step1Changes: Subscription
  private step2Changes: Subscription
  private step3Changes: Subscription

  @ViewChild('stepper') stepper: MatStepper

  constructor (private formBuilder: FormBuilder) {
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

  ngAfterViewInit () {
    this.step1Changes = this.stepperForm.controls.step1.statusChanges.subscribe(
      status => {
        if (status === 'VALID') {
          if (this.camAccess) {
            // this.stepperForm.controls.step2.setValue(true)
            // this.stepper.selectedIndex = 2
            this.stepper.next()
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
        if (status === 'VALID') this.stepper.next()
      }
    )
  }

  ngOnDestroy (): void {
    if (this.step1Changes) this.step1Changes.unsubscribe()
    if (this.step2Changes) this.step2Changes.unsubscribe()
    if (this.step3Changes) this.step3Changes.unsubscribe()
  }

  getCamAccess () {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => this.stepperForm.controls.step2.setValue(true))
  }
}
