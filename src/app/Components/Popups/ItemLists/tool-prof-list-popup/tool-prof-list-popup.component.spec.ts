import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolProfListPopupComponent } from './tool-prof-list-popup.component';

describe('ToolProfListPopupComponent', () => {
  let component: ToolProfListPopupComponent;
  let fixture: ComponentFixture<ToolProfListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolProfListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolProfListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
