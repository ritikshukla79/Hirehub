
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ProfileserService } from 'src/app/services/users/profileser.service';

@Component({
  selector: 'app-applicantprofile',
  templateUrl: './applicantprofile.component.html',
  styleUrls: ['./applicantprofile.component.css']
})
export class ApplicantprofileComponent implements OnInit {
  email:any;
  name: any;
  mobile: any;
  degree: any;
  edu: any;
  grade: any;
  clg: any;

  resume: any;
  job_id: any;
  skills: any;
  skills2: any;
  f: any;
  profileid: any;
  profileimage: any;
  isthereimage: any=0;
  constructor(private route: ActivatedRoute,private routes:Router, private service: JobserviceService, private notifyservice: NotificationService, private profileservice: ProfileserService) { 
    this.route.queryParamMap.subscribe(
      params=> {
        this.email= this.route.snapshot.queryParams['email'];
        this.job_id= this.route.snapshot.queryParams['job_id'];
        console.log(this.job_id);
        
      })

      
    

  }

  ngOnInit(): void {
    this.showprofile();
    this.displayskills();
  }

  showprofile() {
  
    this.service.showjobseekerdata().subscribe(async(res) => {
      let n = 0;
      //this.bool = 0;
      for (let i in res) {
        let obj = Object.values(res)[n++];
        for(let i of obj)
        {
         console.log(i.attributes.email+".."+this.email);
        if (i.attributes.email == this.email)
        {
          
          this.name= i.attributes.jobseekername;
          this.degree=i.attributes.degree;
          
          this.edu=i.attributes.education;
          this.grade=i.attributes.grade;
          this.clg=i.attributes.college_name;
          this.resume=i.attributes.resume;
          this.skills=i.attributes.skills;
          this.skills2=JSON.parse(this.skills);
          console.log("skills",i.attributes.skills);
          for(let x of this.skills2)
          {
            console.log(x,"skill");
          }
          //this.skills[0];
          console.log(this.name+"...."+this.resume);
         // this.imgurl=obj.jobseeker_details.resume;
         // console.log(this.imgurl);

        }
      }
      }
    })  


    this.service.getuserdata().subscribe(async(res) => {
      let n = 0;
      //this.bool = 0;
      for (let i in res) {
        let obj = Object.values(res)[n++];
       // console.log(this.email);
         console.log(obj.email+".."+this.email);
        if (obj.email == this.email)
        {

         this.profileid= obj.profileId;
         console.log(this.profileid);
         this.profileservice.imagegetter(this.profileid).subscribe((res : any)=>{
          console.log(res);
        this.profileimage = "https://strapi-jobs.herokuapp.com" + res.url;
        if(this.profileimage == "https://strapi-jobs.herokuapp.com")
        {
          
        
        }
        else
        {
          this.isthereimage = 1;
                }
        // this.profile  = res?.data;
        // console.log(this.profile);
        // this.name = this.profile.name;
        // this.phone = this.profile.mobile;
        // this.email = this.profile.email
        // this.role = this.profile.role;
     });  

            
        
         this.mobile=obj.mobile;
         this.name=obj.username;
         console.warn(this.mobile+".."+this.name);

        }
      }
    })
  
  
  }
  
download(url:any, fileName:any)
{
console.log(JSON.stringify(url.resume));
const a:any= document.createElement('a');
a.href=url.resume;
a.download=fileName;
document.body.appendChild(a);
a.style = 'display: none';
a.click();
a.remove();
}


 mymap= new Map<string, number>();
accept(email:any, job_id:any)
{
  console.log(email+".."+JSON.stringify(job_id));
  // this.mymap.set(job_id,email);
   //console.log(this.mymap);
   
   let obj={ empemail: email, job_id: this.job_id, accept: "1"};
   this.service.submitdetails2(obj);
   this.notifyservice.showSuccess("Wow!!You have Selected this Candidate","")
    
   this.routes.navigateByUrl("/myjob");
  
}   

reject(email:any, job_id:any)
{
  console.log(email+".."+JSON.stringify(job_id));
  // this.mymap.set(job_id,email);
  // console.log(this.mymap);
   let obj={ empemail: email, job_id: this.job_id, accept: "0"};
   this.service.submitdetails2(obj);
   this.notifyservice.showError("The candidate does not fit for this role!!","");
   this.routes.navigateByUrl("/myjob");
   


  
}  



// sendtofirebase(mymap:any) {
  
//   this.service.callfunc().subscribe(async(res) => {
//     let n = 0;
//     //this.bool = 0;
//     for (let i in res) {
//       let obj = Object.values(res)[n++];
//        console.log(obj.job_details.job_id+"..");
//        if(obj.job_details.job_id==this.mymap.get(this.job_id))
//        {
        
//        }
//        console.log(obj);
//     }
//   })

 
// }

displayskills(){
  for (let i=0 ; i<+this.skills.length ; i++){
    console.log(this.skills[i]);
  }
}

}
