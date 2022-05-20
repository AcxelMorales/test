import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPsswComponent } from './new-pssw.component';

describe('NewPsswComponent', () => {
  let component: NewPsswComponent;
  let fixture: ComponentFixture<NewPsswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPsswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPsswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
