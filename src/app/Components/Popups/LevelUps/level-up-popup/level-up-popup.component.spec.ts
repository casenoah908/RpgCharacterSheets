import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpPopupComponent } from './level-up-popup.component';

describe('LevelUpPopupComponent', () => {
  let component: LevelUpPopupComponent;
  let fixture: ComponentFixture<LevelUpPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelUpPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelUpPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
