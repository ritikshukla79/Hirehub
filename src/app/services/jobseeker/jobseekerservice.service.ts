import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators'; import { Observable, throwError } from 'rxjs';
import { UserCredentialsService } from '../users/user-credentials.service';



@Injectable({
  providedIn: 'root'
})
export class JobseekerserviceService {



  constructor(private http: HttpClient, private uss: UserCredentialsService) { }


  submitJobseekerdetails(obj:any){

    let options = {
      method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({data:obj})
    }
    let fetchRes = fetch('https://strapi-jobs.herokuapp.com/api/jobseekerdatas', options);
    fetchRes.then(res => res.json()).then((res) => { console.log(res)});

    
  }

  submitappliedjobs(obj:any){

    let options = {
      method: 'POST', headers: { 'Content-Type': 'application/json;charset=utf-8', }, body: JSON.stringify({data:obj})
    }
    let fetchRes = fetch('https://strapi-jobs.herokuapp.com/api/appliedjobss', options);
    fetchRes.then(res => res.json()).then((res) => {  console.log(res)});
    
  }

  Fetchjobseekerdata(){

    return this.http.get("https://strapi-jobs.herokuapp.com/api/jobseekerdatas");
  }
  

  Fetchuserdata(){
    
    return this.http.get("https://strapi-jobs.herokuapp.com/api/users");
  }

  FetchJobpostdata()
  {

    return this.http.get("https://strapi-jobs.herokuapp.com/api/job-posts");
  }

  Fetchappliedjob(){

    return this.http.get("https://strapi-jobs.herokuapp.com/api/appliedjobss");
  }

  FetchUserAcceptTTable(){

    return this.http.get("https://strapi-jobs.herokuapp.com/api/accepts")

  }

}
