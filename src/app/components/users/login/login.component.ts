import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/users/auth-guard.service';
import { GenerateTokenService } from 'src/app/services/users/generate-token.service';
import { GetUserService } from 'src/app/services/users/get-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private getuser : GetUserService,private router : Router, private setcookie : GenerateTokenService) { }
  hide = true;
  eye : boolean = false;
  success : string = "";
  em : any;
  pass : any;
  rl : any;
  bool : number =0;
  load : string = "0";
  ngOnInit(): void {

  }



  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),

  })

  get password() {
    return this.form.get('password');
  }
  get email() {
    return this.form.get('email');
  }
  
  async credentialsubmit(data: any) {
    this.form.reset();


    // await this.service.login().subscribe(async(res) => {
    //   let n = 0;
    //   for (let i in res) {
    //     let obj = Object.values(res)[n++];
    //     if (obj.email == this.em && obj.password == this.pass) {
    //       this.success = "1";
    //       this.load = "1";
    //       await this.tokenGen.setCookieToken({ email: this.em, password: this.pass, role : obj.role}).then((res: any) => {
    //         this.load = "0";
    //         if (res != null) {
    //           this.bool =1;
    //           this.router.navigate([""]);
          
    //         }
    //         else  
    //           this.success = "0";
    //       });
    //     }
        
    //   }
    //   if (this.bool === 0) {
    //     this.success = "0";
    //   }
    // });
    this.load = "1";
    this.getuser.authUser(data).then(res=>{
      // console.log(res);
      console.log("aaya");
      if(res.jwt!=null)
      {
        this.setcookie.setCookieToken({token: res.jwt, data : data}).then(res=>{
          this.load = "0";
          console.log(res);
          if(res.encryptedtoken!=null)
          {
            // this.service.islogin = true;
            // console.log(this.service.islogin);
            console.log("aaya1");
            this.success = "1";
            this.router.navigate([""]);
          }
        });
     
      }
      else if(res.data == null)
      {
        this.load = "0";
        this.success = "0";
      }
    });
  }
  showpass()
  {
    this.eye = !this.eye;
  }
}