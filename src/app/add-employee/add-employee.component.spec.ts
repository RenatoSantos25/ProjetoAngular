import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADdEmployeeComponent } from './add-employee.component';

describe('ADdEmployeeComponent', () => {
  let component: ADdEmployeeComponent;
  let fixture: ComponentFixture<ADdEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADdEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADdEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
