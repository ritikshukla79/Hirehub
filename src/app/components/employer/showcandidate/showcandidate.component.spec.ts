import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcandidateComponent } from './showcandidate.component';

describe('ShowcandidateComponent', () => {
  let component: ShowcandidateComponent;
  let fixture: ComponentFixture<ShowcandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
