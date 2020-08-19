import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageListPopupComponent } from './language-list-popup.component';

describe('LanguageListPopupComponent', () => {
  let component: LanguageListPopupComponent;
  let fixture: ComponentFixture<LanguageListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
