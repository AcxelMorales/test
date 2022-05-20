import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpCorreoModalComponent } from './otp-correo-modal.component';

describe('OtpCorreoModalComponent', () => {
  let component: OtpCorreoModalComponent;
  let fixture: ComponentFixture<OtpCorreoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpCorreoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpCorreoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
