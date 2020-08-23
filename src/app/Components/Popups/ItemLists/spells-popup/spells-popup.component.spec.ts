import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsPopupComponent } from './spells-popup.component';

describe('SpellsPopupComponent', () => {
  let component: SpellsPopupComponent;
  let fixture: ComponentFixture<SpellsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
