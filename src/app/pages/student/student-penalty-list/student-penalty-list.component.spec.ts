import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPenaltyListComponent } from './student-penalty-list.component';

describe('StudentPenaltyListComponent', () => {
  let component: StudentPenaltyListComponent;
  let fixture: ComponentFixture<StudentPenaltyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPenaltyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPenaltyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
