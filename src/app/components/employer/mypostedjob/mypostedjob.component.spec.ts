import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostedjobComponent } from './mypostedjob.component';

describe('MypostedjobComponent', () => {
  let component: MypostedjobComponent;
  let fixture: ComponentFixture<MypostedjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypostedjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypostedjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
