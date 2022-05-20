import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesorevicionComponent } from './procesorevicion.component';

describe('ProcesorevicionComponent', () => {
  let component: ProcesorevicionComponent;
  let fixture: ComponentFixture<ProcesorevicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesorevicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesorevicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
