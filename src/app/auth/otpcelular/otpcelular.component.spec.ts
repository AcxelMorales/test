import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpcelularComponent } from './otpcelular.component';

describe('OtpcelularComponent', () => {
  let component: OtpcelularComponent;
  let fixture: ComponentFixture<OtpcelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpcelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpcelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
