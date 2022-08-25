import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedjobdetailsComponent } from './postedjobdetails.component';

describe('PostedjobdetailsComponent', () => {
  let component: PostedjobdetailsComponent;
  let fixture: ComponentFixture<PostedjobdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedjobdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedjobdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
