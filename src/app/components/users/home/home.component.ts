import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCredentialsService } from "src/app/services/users/user-credentials.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Route: Router, private userCred: UserCredentialsService) { }
  loggedIn: boolean = true;
  role: any;
  subscribed_array: any = [];
  category: any;
  bl: boolean = true;
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  
    
    this.userCred.decodeToken().then((dataRes: any) => {
      if (dataRes && dataRes.data) {
        this.loggedIn = true;
        this.role = dataRes.data.role;
        console.log(this.role);
        if (this.role == 'Employer') {
          this.bl = false;
        }
        else {
          this.bl = true
        }
      } 
      else {
        this.loggedIn = false;
      }
    });

    // this.Route.events.subscribe((event:Event)=>{
    //   if (event instanceof NavigationEnd) {
    //       if(event.url === ' '){
    //           this.loggedIn=false ;
    //       }
    //     }
    // });

  }

 
  see_more_jobs() {
    if(this.loggedIn == true){
    this.Route.navigate(['/joblist']);
    }
    else{

      this.Route.navigate(['/signin']);
    }
  }
  create_account() {
    this.Route.navigate(['/signup']);
  }
  subscribe_button(obj: any) {
    let options = {
      method: 'POST', headers: { 'Content-Type': 'application/json;charset=utf-8', }, body: JSON.stringify(obj)
    }
    let fetchRes = fetch('https://strapi-jobs.herokuapp.com/api/newsletter', options);
    fetchRes.then(res => res.json()).then(() => { });


    this.form.get('email')?.reset("");
  }
  get email() {
    return this.form.get('email');
  }


}
