import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertglobalComponent } from './alertglobal.component';

describe('AlertglobalComponent', () => {
  let component: AlertglobalComponent;
  let fixture: ComponentFixture<AlertglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertglobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
