import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosenviadosComponent } from './datosenviados.component';

describe('DatosenviadosComponent', () => {
  let component: DatosenviadosComponent;
  let fixture: ComponentFixture<DatosenviadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosenviadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosenviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
