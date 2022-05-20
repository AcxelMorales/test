import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfNewPssComponent } from './conf-new-pss.component';

describe('ConfNewPssComponent', () => {
  let component: ConfNewPssComponent;
  let fixture: ComponentFixture<ConfNewPssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfNewPssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfNewPssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
