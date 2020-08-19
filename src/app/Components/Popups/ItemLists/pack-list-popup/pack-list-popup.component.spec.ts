import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackListPopupComponent } from './pack-list-popup.component';

describe('PackListPopupComponent', () => {
  let component: PackListPopupComponent;
  let fixture: ComponentFixture<PackListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
