import { AfterViewInit, Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements AfterViewInit, OnDestroy {
  // @ViewChild('player')
  // private playerRef: ElementRef<HTMLVideoElement>
  // @ViewChild('canvas')
  // private canvasRef: ElementRef<HTMLCanvasElement>
  //
  // @ViewChildren(HTMLImageElement)
  // private images: QueryList<ElementRef<HTMLImageElement>>

  // private player: HTMLVideoElement
  // private canvas: HTMLCanvasElement
  // private context: CanvasRenderingContext2D
  //
  // private readonly numberOfPics = 7

  pictures: string[] = []
  capturing = true
  conditions = false

  ngAfterViewInit () {
    // this.player = this.playerRef.nativeElement
    // this.canvas = this.canvasRef.nativeElement
    // this.context = this.canvas.getContext('2d')
    //
    // // start camera stream
    // navigator.mediaDevices
    //   .getUserMedia({ video: true })
    //   .then(stream => (this.player.srcObject = stream))
  }

  ngOnDestroy () {
    // stop camera stream
    // (this.player.srcObject as MediaStream)
    //   .getVideoTracks()
    //   .forEach(track => track.stop())
  }

  capture () {
    // this.context.drawImage(
    //   this.player,
    //   0,
    //   0,
    //   this.canvas.width,
    //   this.canvas.height
    // )
    // this.pictures.push(this.canvas.toDataURL('image/png'))
    // if (this.pictures.length === this.numberOfPics) {
    //   this.capturing = false
    //   this.submit()
    // }
  }

  retry () {
    // this.pictures = []
    // this.capturing = true
  }

  private submit () {
    // console.log({
    //   picture1: this.pictures[0],
    //   picture2: this.pictures[1],
    //   picture3: this.pictures[2]
    // })
  }
}
