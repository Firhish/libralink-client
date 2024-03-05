import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPenaltyComponent } from './application-penalty.component';

describe('ApplicationPenaltyComponent', () => {
  let component: ApplicationPenaltyComponent;
  let fixture: ComponentFixture<ApplicationPenaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationPenaltyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
