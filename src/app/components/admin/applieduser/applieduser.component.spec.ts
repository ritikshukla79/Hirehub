import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplieduserComponent } from './applieduser.component';

describe('ApplieduserComponent', () => {
  let component: ApplieduserComponent;
  let fixture: ComponentFixture<ApplieduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplieduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplieduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
