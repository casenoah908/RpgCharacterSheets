import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponProfListPopupComponent } from './weapon-prof-list-popup.component';

describe('WeaponProfListPopupComponent', () => {
  let component: WeaponProfListPopupComponent;
  let fixture: ComponentFixture<WeaponProfListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponProfListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponProfListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
