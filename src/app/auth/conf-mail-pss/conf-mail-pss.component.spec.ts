import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfMailPssComponent } from './conf-mail-pss.component';

describe('ConfMailPssComponent', () => {
  let component: ConfMailPssComponent;
  let fixture: ComponentFixture<ConfMailPssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfMailPssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfMailPssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
