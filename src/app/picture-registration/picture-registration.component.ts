import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core'
import { AppService, ValidateRequest } from '../app.service'

@Component({
  selector: 'app-picture-registration',
  templateUrl: './picture-registration.component.html',
  styleUrls: ['./picture-registration.component.css']
})
export class PictureRegistrationComponent implements AfterViewInit, OnDestroy {
  @Output() private complete = new EventEmitter<string[]>()

  @ViewChild('player')
  private playerRef: ElementRef<HTMLVideoElement>
  @ViewChild('canvas')
  private canvasRef: ElementRef<HTMLCanvasElement>

  private player: HTMLVideoElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  readonly numberOfPics = 3

  pictures: string[] = []

  constructor (private service: AppService) {}

  ngAfterViewInit () {
    this.player = this.playerRef.nativeElement
    this.canvas = this.canvasRef.nativeElement
    this.context = this.canvas.getContext('2d')

    // start camera stream
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => (this.player.srcObject = stream))
  }

  ngOnDestroy () {
    // stop camera stream
    (this.player.srcObject as MediaStream)
      .getVideoTracks()
      .forEach(track => track.stop())
  }

  capture () {
    this.context.drawImage(
      this.player,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    )
    this.pictures.push(this.canvas.toDataURL('image/png'))
    if (this.pictures.length === this.numberOfPics) this.submit()
  }

  reset () {
    this.pictures = []
  }

  private submit () {
    this.validate()
  }

  validate () {
    const body: ValidateRequest = {
      uid: 'yeeeha',
      pics: this.pictures.map(pic => pic.split(',')[1])
    }
    this.service.validate(body).subscribe(response => {
      console.log(response)
      // this.complete.emit(this.pictures)
      // this.reset()
    })
  }
}
