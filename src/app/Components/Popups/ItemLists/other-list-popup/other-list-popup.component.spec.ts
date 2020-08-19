import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherListPopupComponent } from './other-list-popup.component';

describe('OtherListPopupComponent', () => {
  let component: OtherListPopupComponent;
  let fixture: ComponentFixture<OtherListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
