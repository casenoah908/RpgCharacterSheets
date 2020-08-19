import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorListPopupComponent } from './armor-list-popup.component';

describe('ArmorListPopupComponent', () => {
  let component: ArmorListPopupComponent;
  let fixture: ComponentFixture<ArmorListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
