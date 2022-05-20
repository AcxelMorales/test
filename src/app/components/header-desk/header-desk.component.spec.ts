import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDeskComponent } from './header-desk.component';

describe('HeaderDeskComponent', () => {
  let component: HeaderDeskComponent;
  let fixture: ComponentFixture<HeaderDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
