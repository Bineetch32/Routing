import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptChildComponent } from './dept-child.component';

describe('DeptChildComponent', () => {
  let component: DeptChildComponent;
  let fixture: ComponentFixture<DeptChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
