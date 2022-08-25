import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuardService } from './auth-guard.service';
import { UserCredentialsService } from './user-credentials.service';

@Injectable({
  providedIn: 'root'
})
export class CanJobService {

  constructor(private router: Router, private authservice: AuthGuardService) { }

  role: any;
  canActivate() {
    
    let permit = this.authservice.islogin;
    console.log(permit);
    console.log(this.authservice.role);
    if((this.authservice.role == "Job Seeker" || this.authservice.role == "Admin") && this.authservice.islogin == true)
    {
      permit = true;
    }
    else  
      permit = false;
    return (permit);
   }
}