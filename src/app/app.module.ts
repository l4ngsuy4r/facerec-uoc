import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatStepperModule
} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StepperComponent } from './stepper/stepper.component'
import { SectionComponent } from './section/section.component'
import { CameraComponent } from './camera/camera.component'
import { GalleryComponent } from './gallery/gallery.component'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    SectionComponent,
    CameraComponent,
    GalleryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
