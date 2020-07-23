import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTraitsComponent } from './class-traits.component';

describe('ClassTraitsComponent', () => {
  let component: ClassTraitsComponent;
  let fixture: ComponentFixture<ClassTraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
