import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDividerModule,
  MatIconModule, MatListModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, SignUpComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
