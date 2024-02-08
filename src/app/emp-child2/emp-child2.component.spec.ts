import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpChild2Component } from './emp-child2.component';

describe('EmpChild2Component', () => {
  let component: EmpChild2Component;
  let fixture: ComponentFixture<EmpChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
