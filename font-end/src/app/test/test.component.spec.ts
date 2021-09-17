import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:font-end/src/app/webcam2/webcam2.component.spec.ts
import { Webcam2Component } from './webcam2.component';

describe('Webcam2Component', () => {
  let component: Webcam2Component;
  let fixture: ComponentFixture<Webcam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:font-end/src/app/webcam2/webcam2.component.spec.ts
    fixture = TestBed.createComponent(Webcam2Component);
=======
    fixture = TestBed.createComponent(TestComponent);
>>>>>>> main:font-end/src/app/test/test.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
