import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core'

@Component({
  selector: 'app-picture-registration',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit, OnDestroy {
  @Input() numberOfPics = 3
  @Output() private complete = new EventEmitter<string[]>()

  @ViewChild('player')
  private playerRef: ElementRef<HTMLVideoElement>
  @ViewChild('canvas')
  private canvasRef: ElementRef<HTMLCanvasElement>

  private player: HTMLVideoElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  pictures: string[] = []

  ngAfterViewInit() {
    this.player = this.playerRef.nativeElement
    this.canvas = this.canvasRef.nativeElement
    this.context = this.canvas.getContext('2d')
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => (this.player.srcObject = stream))
  }

  ngOnDestroy() {
    ;(this.player.srcObject as MediaStream)
      .getVideoTracks()
      .forEach(track => track.stop())
  }

  capture() {
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

  private submit() {
    this.complete.emit(this.pictures)
    this.pictures = []
  }
}
