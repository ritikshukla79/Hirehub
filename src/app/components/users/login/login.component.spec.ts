import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { GenerateTokenService } from 'src/app/services/users/generate-token.service';
import { GetUserService } from 'src/app/services/users/get-user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ LoginComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('', fakeAsync(()=>{
  //   Router.
  // }))
});
