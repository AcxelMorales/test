import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinFlujoComponent } from './fin-flujo.component';

describe('FinFlujoComponent', () => {
  let component: FinFlujoComponent;
  let fixture: ComponentFixture<FinFlujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinFlujoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinFlujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
