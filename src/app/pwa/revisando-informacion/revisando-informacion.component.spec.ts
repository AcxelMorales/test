import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisandoInformacionComponent } from './revisando-informacion.component';

describe('RevisandoInformacionComponent', () => {
  let component: RevisandoInformacionComponent;
  let fixture: ComponentFixture<RevisandoInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisandoInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisandoInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
