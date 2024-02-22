import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentHistoryComponentComponent } from './employment-history-component.component';

describe('EmploymentHistoryComponentComponent', () => {
  let component: EmploymentHistoryComponentComponent;
  let fixture: ComponentFixture<EmploymentHistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentHistoryComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploymentHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
