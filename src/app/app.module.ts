import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatRippleModule,
  MatStepperModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StepperComponent } from './stepper/stepper.component'
import { SectionComponent } from './section/section.component'
import { PictureRegistrationComponent } from './picture-registration/picture-registration.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    StepperComponent,
    SectionComponent,
    PictureRegistrationComponent
  ],
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
    MatToolbarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
