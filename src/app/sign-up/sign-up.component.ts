import { AfterViewInit, Component, Inject, LOCALE_ID } from '@angular/core'
import { backdrop } from 'backdropjs'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements AfterViewInit {
  constructor (@Inject(LOCALE_ID) public locale: string) {
    console.log(locale)
  }

  ngAfterViewInit (): void {
    // backdrop(document.documentElement.outerHTML, document.getElementById('top-bar-wrapper'), 20, 'yes')
  }
}
