import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BadPicturesComponent } from './bad-pictures.component'

describe('BadPicturesComponent', () => {
  let component: BadPicturesComponent
  let fixture: ComponentFixture<BadPicturesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BadPicturesComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BadPicturesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
