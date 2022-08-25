import { ComponentFixture, TestBed } from '@angular/core/testing';

import { faqComponent } from './faq.component';

describe('StoryComponent', () => {
  let component: faqComponent;
  let fixture: ComponentFixture<faqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ faqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(faqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
