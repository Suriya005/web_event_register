import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webcam2Component } from './webcam2.component';

describe('Webcam2Component', () => {
  let component: Webcam2Component;
  let fixture: ComponentFixture<Webcam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Webcam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Webcam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
