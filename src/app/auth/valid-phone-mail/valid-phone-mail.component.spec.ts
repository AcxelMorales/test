import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidPhoneMailComponent } from './valid-phone-mail.component';

describe('ValidPhoneMailComponent', () => {
  let component: ValidPhoneMailComponent;
  let fixture: ComponentFixture<ValidPhoneMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidPhoneMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidPhoneMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
