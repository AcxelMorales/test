import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPwaComponent } from './header-pwa.component';

describe('HeaderPwaComponent', () => {
  let component: HeaderPwaComponent;
  let fixture: ComponentFixture<HeaderPwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
