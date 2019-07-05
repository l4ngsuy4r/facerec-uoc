import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core'

@Component({
  selector: 'app-picture-registration',
  templateUrl: './picture-registration.component.html',
  styleUrls: ['./picture-registration.component.css']
})
export class PictureRegistrationComponent implements AfterViewInit, OnDestroy {
  @Output() completed = new EventEmitter()

  @ViewChild('player')
  private playerRef: ElementRef<HTMLVideoElement>
  @ViewChild('canvas')
  private canvasRef: ElementRef<HTMLCanvasElement>

  @ViewChildren(HTMLImageElement)
  private images: QueryList<ElementRef<HTMLImageElement>>

  private player: HTMLVideoElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  private readonly numberOfPics = 3

  pictures: string[] = []

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
    console.log({
      picture1: this.pictures[0],
      picture2: this.pictures[1],
      picture3: this.pictures[2]
    })
    this.completed.emit({
      picture1: this.pictures[0],
      picture2: this.pictures[1],
      picture3: this.pictures[2]
    })
    this.reset()
  }
}
