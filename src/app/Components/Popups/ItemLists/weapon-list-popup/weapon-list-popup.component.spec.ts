import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponListPopupComponent } from './weapon-list-popup.component';

describe('WeaponListPopupComponent', () => {
  let component: WeaponListPopupComponent;
  let fixture: ComponentFixture<WeaponListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
