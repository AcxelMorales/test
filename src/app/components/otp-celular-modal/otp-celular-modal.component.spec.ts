import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpCelularModalComponent } from './otp-celular-modal.component';

describe('OtpCelularModalComponent', () => {
  let component: OtpCelularModalComponent;
  let fixture: ComponentFixture<OtpCelularModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpCelularModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpCelularModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
