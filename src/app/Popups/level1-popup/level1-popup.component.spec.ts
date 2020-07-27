import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1PopupComponent } from './level1-popup.component';

describe('Level1PopupComponent', () => {
  let component: Level1PopupComponent;
  let fixture: ComponentFixture<Level1PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level1PopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
