import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplicantsComponent } from './jobapplicants.component';

describe('JobapplicantsComponent', () => {
  let component: JobapplicantsComponent;
  let fixture: ComponentFixture<JobapplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobapplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
