import { Component, Inject, LOCALE_ID } from '@angular/core'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor (@Inject(LOCALE_ID) public locale: string) {
    console.log(locale)
  }
}
