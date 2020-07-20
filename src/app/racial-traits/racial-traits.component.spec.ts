import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacialTraitsComponent } from './racial-traits.component';

describe('RacialTraitsComponent', () => {
  let component: RacialTraitsComponent;
  let fixture: ComponentFixture<RacialTraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacialTraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacialTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
