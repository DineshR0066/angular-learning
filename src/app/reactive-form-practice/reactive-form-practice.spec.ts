import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPractice } from './reactive-form-practice';

describe('ReactiveFormPractice', () => {
  let component: ReactiveFormPractice;
  let fixture: ComponentFixture<ReactiveFormPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
