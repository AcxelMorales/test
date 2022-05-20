import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPCorreoComponent } from './otpcorreo.component';

describe('OTPCorreoComponent', () => {
  let component: OTPCorreoComponent;
  let fixture: ComponentFixture<OTPCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTPCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OTPCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
