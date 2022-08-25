import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators'; import { Observable, throwError } from 'rxjs';
import { UserCredentialsService } from '../users/user-credentials.service';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  [x: string]: any;



  getjobposts()
  {

    return this.http.get("https://strapi-jobs.herokuapp.com/api/job-posts");
  }

  showjobseekerdata()
  {
     console.log("herer");
    return this.http.get("https://strapi-jobs.herokuapp.com/api/jobseekerdatas");
  }

  getuserdata()
  {
     console.log("herer");
     return this.http.get("https://strapi-jobs.herokuapp.com/api/users");
   
  }
  deletejob(key:any){
  return this.http.delete(`https://hirehub-b4396-default-rtdb.firebaseio.com//JobPosts/${key}.json`).pipe(retry(1), catchError(this.handleError)); 
  }

  handleError(error: any) {
    let errorMessage = ''; if (error.error instanceof ErrorEvent) { 
      // client-side error 
      errorMessage = `Error11111: ${error.error.message}`; }
       else { // server-side error 
        errorMessage = `Error Code111: ${error.status}\nMessage: ${error.message}`; 
      }
       console.log(errorMessage); 
       return throwError(() => { return errorMessage; });
       }   

  getAcceptdata()
  {
     console.log("herer");
    return this.http.get("https://strapi-jobs.herokuapp.com/api/accepts");
  }


  // callfunc5()
  // {
  //    console.log("herer");
  //   return this.http.get("https://hirehub-b4396-default-rtdb.firebaseio.com//appliedjobs.json");
  // }

  constructor(private http: HttpClient, private uss: UserCredentialsService) { }

  submitdetails(obj:any) {
    console.log(obj,"is the obj");

          // obj["jobAppliedBy"] = ["noparticipant", "revaa@gmail.com"];
          
   
       
    let options = {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({data:obj})
    }
   // console.log(options);
    let fetchRes = fetch('https://strapi-jobs.herokuapp.com/api/job-posts', options);
    
    fetchRes.then(res => res.json()).then((res) => { console.log(res) });
    
  }

  submitdetails2(obj:any) {

   
    console.log("here we are!!!",obj)


let options = {
method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({data:obj})
}
let fetchRes = fetch('https://strapi-jobs.herokuapp.com/api/accepts', options);
fetchRes.then(res => res.json()).then((res) => { console.log(res)});

}

 
}
