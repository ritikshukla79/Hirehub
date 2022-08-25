import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserCredentialsService } from 'src/app/services/users/user-credentials.service';
import { Jobs } from '../../models/Jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

 job=new Jobs();
  jobb:any[]=[];
  loggedIn:any;
  job_id:any;
  empemail2:any='';
  myemail:any;
  tabss: any='jdetails';
  constructor(private service: JobserviceService, private route: Router, private userCred: UserCredentialsService, private notifyservice: NotificationService) { 
    this.userCred.decodeToken().then((res:any) => {
        
      if (res) {
        this.loggedIn = true;
        this.empemail2 = res.data.email;
        console.log(this.empemail2);
        
      } else {

        this.loggedIn = false;
        
      }
    });

   // this.addJobForm.get('job_details.empemail');
  }  

  addJobForm = new FormGroup({
  
    job_details : new FormGroup({
    job_id: new FormControl(Math.random(), Validators.required),
    job_title: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    package: new FormControl(null, Validators.required),
    company: new FormControl(null, [Validators.required]),
    location: new FormControl(null, Validators.required),
    empemail: new FormControl(this.empemail2),
    ls_date: new FormControl(null, Validators.required),
    desc: new FormControl(null, Validators.required),
    typeofjob: new FormControl(null, Validators.required),
    reqskills: new FormArray([
      new FormControl(null),
     
   ])
    }), 
    company_details: new FormGroup({
      company_name: new FormControl(),
      web_url: new FormControl(null, Validators.required),
      tagline: new FormControl(null, Validators.required),
      img_url: new FormControl(null, Validators.required)

    })

   
});

 method()
{
  if(this.tabss=="jdetails")
  {
    this.tabss="cdetails";
  }
 
}
    
myjob:any;

add(obj2:any)
{
  this.job.job_id= Math.random();
  this.job.job_title= this.addJobForm.value.job_details?.job_title;
  this.job.location= this.addJobForm.value.job_details?.location;
  this.job.category= this.addJobForm.value.job_details?.category;
 
  this.job.company= this.addJobForm.get('job_details.company')?.value;
  this.job.ls_date= this.addJobForm.get('job_details.ls_date')?.value;
  this.job.typeofjob= this.addJobForm.get('job_details.typeofjob')?.value;
  this.job.package= this.addJobForm.get('job_details.package')?.value;
 
  this.job.empemail= this.empemail2;
  this.job.desc= this.addJobForm.get('job_details.desc')?.value
  this.job.company_name= this.addJobForm.get('company_details.company_name')?.value
  this.job.web_url= this.addJobForm.get('company_details.web_url')?.value
  this.job.tagline= this.addJobForm.get('company_details.tagline')?.value;
  this.job.skills=JSON.stringify(this.addJobForm.value.job_details?.reqskills);
 console.log(this.job.skills);
 
   this.job.img_url= this.addJobForm.get('company_details.img_url')?.value;

//   let obj= { id: this.job.id ,title: this.job.job_title,  email: this.job.empemail, location: this.job.location, company: this.job.company, ls_date: this.job.ls_date, 
//   typeofjob: this.job.typeofjob, desc: this.job.desc, company_name: this.job.company_name, web_url: this.job.web_url, 
// tagline: this.job.tagline, img_url: this.job.img_url };


this.service.submitdetails(this.job);
this.addJobForm.reset();
//console.warn(obj);

this.notifyservice.showSuccess("You have Successfully added a new Job!!","");
this.route.navigateByUrl("/myjob");

  
}


addtoc() {



  let skills=new FormControl(null, [Validators.required]);

  return (this.addJobForm.get('job_details.reqskills') as FormArray).push(skills);

}  

getControls() {
  return (this.addJobForm.get('job_details.reqskills') as FormArray).controls;
}



fillemail()
{
  this.myemail=this.empemail2;
}

  ngOnInit(): void {
  }

}
