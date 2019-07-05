import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PictureRegistrationComponent } from './picture-registration.component'

describe('PictureRegistrationComponent', () => {
  let component: PictureRegistrationComponent
  let fixture: ComponentFixture<PictureRegistrationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureRegistrationComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureRegistrationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
