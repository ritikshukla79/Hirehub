import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserCredentialsService } from './user-credentials.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  islogin : boolean = false;
  role  : string = "";
  constructor(private http : HttpClient, private router : Router, private usercred : UserCredentialsService) {
    this.func();
  }
  async func()
  {
    await this.usercred.decodeToken().then((res : any) =>{
      if(res?.data!=null)
      {
        this.islogin = true;
        this.role = res?.data.role;
        console.log(this.islogin);
        if(this.islogin == !false)
        this.router.navigate([""]);
      }
      
      return !(this.islogin)
    })
  }
  // login()
  // {
  //   return this.http.get('https://hirehub-b4396-default-rtdb.firebaseio.com/User_SignUp.json');      
  // }
  // patch(key : any, Previousobject : any)
  // {
  //   console.log(key[key.length-1]);
  //   console.log(key);
   
  //   console.log(Previousobject);
  //   console.log(Previousobject.password);
  //   return this.http.patch(`https://hirehub-b4396-default-rtdb.firebaseio.com/User_SignUp/${key}.json`, JSON.stringify(Previousobject));

  // }
  canActivate() {
    
    // let permit = !(this.islogin);
    // console.log(permit);
    // console.log("aayaa");
    this.func();
   }
  
}