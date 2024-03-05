import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherApplicationComponent } from './application.component';

describe('ApplicationComponent', () => {
  let component: TeacherApplicationComponent;
  let fixture: ComponentFixture<TeacherApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
