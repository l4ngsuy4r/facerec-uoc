import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements AfterViewInit, OnDestroy {
  @ViewChild('player') private playerRef: ElementRef<HTMLVideoElement>
  @ViewChild('canvas') private canvasRef: ElementRef<HTMLCanvasElement>

  private player: HTMLVideoElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  ngAfterViewInit (): void {
    this.player = this.playerRef.nativeElement
    this.canvas = this.canvasRef.nativeElement
    this.context = this.canvas.getContext('2d')
  }

  ngOnDestroy () {
    this.stopStream()
  }

  captureImage () {
    this.context.drawImage(
      this.player,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    )
  }

  startStream () {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => (this.player.srcObject = stream))
  }

  stopStream () {
    (this.player.srcObject as MediaStream)
      .getVideoTracks()
      .forEach(track => track.stop())
  }
}
