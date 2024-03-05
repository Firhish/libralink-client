import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReturnComponent } from './application-return.component';

describe('ApplicationReturnComponent', () => {
  let component: ApplicationReturnComponent;
  let fixture: ComponentFixture<ApplicationReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
