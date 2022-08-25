import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { AuthGuardService } from 'src/app/services/users/auth-guard.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  constructor(private router : Router, private authservice : AuthGuardService, private http : HttpClient) { }
  // dsp : number = 0;
  // eye1 : boolean = false;
  // eye2 : boolean = false;
  // error : number = 0;
  // Otp : any;
  // Previousobject : any;
  // keykey : any;
  // keyvalue : any;
  // keyEmail : string = "";
  // data : any;
  
//   form = new FormGroup({
//     email: new FormControl('', [Validators.required]),
//   })
//   get email()
//   {
//     return this.form.get('email');
//   }
//   form1 = new FormGroup({
//     otp: new FormControl('', [Validators.required]),
//   })
//   get otp()
//   {
//     return this.form.get('otp');
//   }

//   form2 = new FormGroup({
//     pass1: new FormControl('', [Validators.required]),
//     pass2: new FormControl('', [Validators.required]),
//   })

//   backtologin()
//   {
//     console.log("aaya");
//     this.router.navigate(["signin"]);
//   }
//   getemail(data : any)
//   {

//     this.strapireset(data)    
//     // this.authservice.login().subscribe(res=>{
//     //   let n = 0;
//     //   for(let i in res)
//     //   {
//     //     let obj = Object.values(res)[n];
        
//     //     this.keykey = Object.keys(res)[n++];

        
//     //     if(obj.email === data.email)
//     //     {
//     //       this.keyvalue = this.keykey;
//     //       this.dsp = 1;
//     //       this.Previousobject = obj;
//     //     }
//     //     else
//     //       this.error = 1;
//     //   }
//     //   this.otpgenerate();
//     // }) 
  
//   }

//   strapireset(data : any)
//   {

  
//       fetch("https://strapi-jobs.herokuapp.com/api/auth/forgot-password", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           email: 'sharma.anuj4411@gmail.com',
//           url:
//             'https://strapi-jobs.herokuapp.com/admin/plugins/users-permissions/auth/reset-password',
//         }),
//       })
//         .then((res) => res.json())
//         .then((responseData) => {
//           console.log(responseData);
//         })

//     axios.post('https://strapi-jobs.herokuapp.com/api/auth/forgot-password', {
//       email:   'sharma.anuj4411@gmail.com',
//       url :    'https://strapi-jobs.herokuapp.com/admin/plugins/users-permissions/auth/reset-password',
//     })
//     .then(response => {
//       // Handle success.
//       console.log('Your user received an email');
//     })
//     .catch(error => {
//       // Handle error.
//       console.log('An error occurred:', error.response);
//     });
//   }

//   userotp(data? : any )
//   { 
//     if(this.Otp == data.otp)
//     {
//       this.dsp = 2;
//     }
//     else
//       this.error = 2;
//   }
//   otpgenerate()
//   {
//     let realOtp = Math.random();
//     if(realOtp < 0.1)
//       realOtp = Math.random();
//     realOtp = realOtp * 1000000;
//     this.Otp = realOtp.toFixed();
//     console.log(this.Otp);
//     this.http.get(`http://localhost:8080/?data=${this.Previousobject.email}&Otp=${this.Otp}`).subscribe(res=>{
//       console.log(res);
//     })
//   }
//   resendotp(){
//     this.otpgenerate();
//   }
//   async submitpass(data : any)
//   { 
//     if(data.pass1 != data.pass2)
//       this.error = 3;
//     else if(this.Previousobject.password == data.pass1)
//       this.error = 4;
//     else 
//     {
//       this.Previousobject.password = data.pass2;
//       await this.authservice.login().subscribe(res=>{
//         console.log(res);
//       })
//       await this.authservice.patch(this.keyvalue, this.Previousobject).subscribe(res=>{
//         console.log("console");
//         console.log(res);
//       });
//       this.dsp = 3;
//       await this.authservice.login().subscribe(res=>{
//         console.log(res);
//       })
//     }
//   }
//   changesuccessful()
//   {
//     this.router.navigate(["signin"]);
//     this.form.reset();
//     this.form1.reset();
//     this.form2.reset();
//   }
//   showpass(eye : boolean, str : string)
//   {
//     if(str == "one")
//       this.eye1 = !this.eye1;
//     else
//       this.eye2 = !this.eye2
//   }
 }
