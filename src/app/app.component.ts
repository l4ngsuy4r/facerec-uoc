import { Component, Inject, LOCALE_ID } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'face-rec'
  // languageList = [
  //   { code: 'en', label: 'English' },
  //   { code: 'cat', label: 'Catalan' },
  //   { code: 'es', label: 'Español' }
  // ]
  // constructor (@Inject(LOCALE_ID) protected localeId: string) {}
}
