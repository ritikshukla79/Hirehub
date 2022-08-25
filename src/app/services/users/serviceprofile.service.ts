import { Injectable } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceprofileService {

  constructor(private authservice : AuthGuardService) { }

  canActivate() {
    
    let permit = this.authservice.islogin;
    return (permit);
   }
}
