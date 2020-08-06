import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRacePopupComponent } from './class-race-popup.component';

describe('ClassRacePopupComponent', () => {
  let component: ClassRacePopupComponent;
  let fixture: ComponentFixture<ClassRacePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassRacePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRacePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
