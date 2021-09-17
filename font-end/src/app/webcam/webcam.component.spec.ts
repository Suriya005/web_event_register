import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:font-end/src/app/webcam2/webcam2.component.spec.ts
<<<<<<< HEAD:font-end/src/app/webcam2/webcam2.component.spec.ts
import { Webcam2Component } from './webcam2.component';
=======
import { WebcamComponent } from './webcam.component';
>>>>>>> parent of 6c2dbf6 (u):font-end/src/app/webcam/webcam.component.spec.ts

describe('WebcamComponent', () => {
  let component: WebcamComponent;
  let fixture: ComponentFixture<WebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD:font-end/src/app/webcam2/webcam2.component.spec.ts
      declarations: [ Webcam2Component ]
=======
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
>>>>>>> main:font-end/src/app/test/test.component.spec.ts
=======
      declarations: [ WebcamComponent ]
>>>>>>> parent of 6c2dbf6 (u):font-end/src/app/webcam/webcam.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:font-end/src/app/webcam2/webcam2.component.spec.ts
<<<<<<< HEAD:font-end/src/app/webcam2/webcam2.component.spec.ts
    fixture = TestBed.createComponent(Webcam2Component);
=======
    fixture = TestBed.createComponent(TestComponent);
>>>>>>> main:font-end/src/app/test/test.component.spec.ts
=======
    fixture = TestBed.createComponent(WebcamComponent);
>>>>>>> parent of 6c2dbf6 (u):font-end/src/app/webcam/webcam.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
