import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDetailPopupComponent } from './spell-detail-popup.component';

describe('SpellDetailPopupComponent', () => {
  let component: SpellDetailPopupComponent;
  let fixture: ComponentFixture<SpellDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
