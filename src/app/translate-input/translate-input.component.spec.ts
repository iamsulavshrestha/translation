import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateInputComponent } from './translate-input.component';

describe('TranslateInputComponent', () => {
  let component: TranslateInputComponent;
  let fixture: ComponentFixture<TranslateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
