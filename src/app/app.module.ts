import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatStepperModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StepperComponent } from './stepper/stepper.component'
import { SectionComponent } from './section/section.component'
import { PictureRegistrationComponent } from './picture-registration/picture-registration.component'
import { GalleryComponent } from './gallery/gallery.component'
import { BadPicturesComponent } from './bad-pictures/bad-pictures.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    StepperComponent,
    SectionComponent,
    PictureRegistrationComponent,
    GalleryComponent,
    BadPicturesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDividerModule,
    MatToolbarModule,
    MatStepperModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
