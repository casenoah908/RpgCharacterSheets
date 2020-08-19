import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorProfListPopupComponent } from './armor-prof-list-popup.component';

describe('ArmorProfListPopupComponent', () => {
  let component: ArmorProfListPopupComponent;
  let fixture: ComponentFixture<ArmorProfListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorProfListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorProfListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
