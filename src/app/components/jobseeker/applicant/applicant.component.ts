import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, finalize } from 'rxjs';
import { JobseekerserviceService } from 'src/app/services/jobseeker/jobseekerservice.service';
import { jobseeker } from '../../models/jobseeker';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Event, NavigationEnd, NavigationError, NavigationStart} from "@angular/router";
import { GenerateTokenService } from "src/app/services/users/generate-token.service";
import { UserCredentialsService } from "src/app/services/users/user-credentials.service";
import { NotificationService } from 'src/app/services/notification/notification.service';




@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  [x: string]: any;

  loggedIn: boolean = false;
  
  myemail:any;
  id:any;
  comp:any;
  category:any;
  jobid:any;
  jobtitle:any;
  desc:any;
  arrmyjob:any[]=[];
  y:any;
  jobseekerdata:any;
  appliedjobs:any;
  useremail:any;
  loading: boolean = false;
  jobseeker_data = new jobseeker();
 


  jobseeker = new jobseeker();
  constructor(private service: JobseekerserviceService, private http: HttpClient,private router : Router,private userCred: UserCredentialsService,
    private cookieToken: GenerateTokenService , private jobservice: JobserviceService, private route: ActivatedRoute, private notifyService : NotificationService) {

     
  
      this.userCred.decodeToken().then((res:any) => {
        console.log(res);
        
        if (res) {
          this.loggedIn = true;
          this.useremail = res.data.email;
          console.log(this.email);
         
          this.route.queryParamMap.subscribe(params =>{
            this.id= this.route.snapshot.queryParams['job_id'];
            console.log(this.id);
            this.applynow();
            
          } )
          
          
        } else {

          this.loggedIn = false;
          
        }
      });
  
      
     }

  addJobseekerForm = new FormGroup({
    jobseeker_details : new FormGroup({
    job_id : new FormControl(),
    jobseekername : new FormControl('',[Validators.required]),
    email: new FormControl('',Validators.required),
    position : new FormControl(),
    education: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    degree: new FormControl('',[Validators.required]),
    grade: new FormControl('',[Validators.required]),
    college_name: new FormControl('',[Validators.required]),
    skills: new FormArray([
      new FormControl('',[Validators.required]),
   ]),
    resume: new FormControl('', [Validators.required]),
    }), 

   
});

add(obj:any){

          
  this.jobseeker_data.job_id =  this.id;
  this.jobseeker_data.jobseekername = this.addJobseekerForm.get('jobseeker_details.jobseekername')?.value;
  this.jobseeker_data.email=  this.useremail;
  this.jobseeker_data.position =this.jobtitle;
  this.jobseeker_data.address = this.addJobseekerForm.get('jobseeker_details.address')?.value;
  this.jobseeker_data.education = this.addJobseekerForm.get('jobseeker_details.education')?.value;
  this.jobseeker_data.college_name= this.addJobseekerForm.get('jobseeker_details.college_name')?.value;
  this.jobseeker_data.degree = this.addJobseekerForm.get('jobseeker_details.degree')?.value;
  this.jobseeker_data.grade = this.addJobseekerForm.get('jobseeker_details.grade')?.value;
  this.jobseeker_data.skills =  JSON.stringify(this.addJobseekerForm.value.jobseeker_details?.skills);
  this.jobseeker_data.resume = this.addJobseekerForm.get('jobseeker_details.resume')?.value;
  //console.log(this.jobseeker_data.skills);
  // this.func(obj.email);

 
  this.service.submitJobseekerdetails(this.jobseeker_data);
  console.log(this.jobseeker_data);
  
  console.warn(JSON.stringify(this.addJobseekerForm.value));
  this.pushtoappliedjobs(this.useremail);
  
  this.addJobseekerForm.reset();
  this.notifyService.showSuccess("Applied successfully!", "");

}


  ngOnInit(): void {
    
 
  }
  get job_id(){
    return this.id;
  }
  
  get jobseekername(){
   
    return this.addJobseekerForm.get('jobseeker_details.jobseekername');
  }
  get address(){
   
    return this.addJobseekerForm.get('jobseeker_details.address');
  }
  get college_name(){
   
    return this.addJobseekerForm.get('jobseeker_details.college_name');
  }
  get education(){
   
    return this.addJobseekerForm.get('jobseeker_details.education');
  }
  get grade(){
   
    return this.addJobseekerForm.get('jobseeker_details.grade');
  }
  get skills(){
   
    return this.addJobseekerForm.get('jobseeker_details.skills');
  }
  get resume(){
   
    return this.addJobseekerForm.get('jobseeker_details.resume');
  }
  get degree(){
   
    return this.addJobseekerForm.get('jobseeker_details.degree');
  }
  
  get email(){
    return this.useremail;
  }
  get position(){
    return this.jobtitle;
  }
  

          

  

       
        pushtoappliedjobs(useremail:any){
          
          let obj={ job_id: this.id,email: useremail, };  
          this.service.submitappliedjobs(obj);
                     
        }

        addtoc() {
          let skills=new FormControl(null, [Validators.required]);

          return (this.addJobseekerForm.get('jobseeker_details.skills') as FormArray).push(skills);

        }  

        getControls() {
          return (this.addJobseekerForm.get('jobseeker_details.skills') as FormArray).controls;
        }
        

       

        func(data: any) {

          const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': '*',
            'mode': 'no-cors',
            'origin': '*'
          }
          headers: new HttpHeaders(headerDict),
            this.http.get(`http://localhost:8080/?data=${data}`).subscribe(data => {
              console.log(data);
            });
        }
      
        
        applynow(){
            
                this.service.FetchJobpostdata().subscribe(async(res) => {
              
                  let n = 0;

            
            
                  for (let i in res) 
                  {
                    let obj:any = Object.values(res)[n++];
                    //console.log(obj);
                    for(let i of obj)
                    {
                       
                        if (i.attributes.job_id == this.id)
                        {
                          this.arrmyjob.push(i.attributes);
                          this.comp = i.attributes.company;
                          this.jobtitle = i.attributes.job_title;
                          
                                
                        }
                    }
                  }
            
          
        
          this.y=this.arrmyjob.length;
        }

      )}

    
        

}
