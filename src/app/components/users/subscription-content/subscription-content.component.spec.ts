import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionContentComponent } from './subscription-content.component';

describe('SubscriptionContentComponent', () => {
  let component: SubscriptionContentComponent;
  let fixture: ComponentFixture<SubscriptionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
