import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpChildComponent } from './emp-child.component';

describe('EmpChildComponent', () => {
  let component: EmpChildComponent;
  let fixture: ComponentFixture<EmpChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
