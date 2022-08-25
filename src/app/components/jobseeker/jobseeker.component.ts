import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobseekerserviceService } from 'src/app/services/jobseeker/jobseekerservice.service';
import { UserCredentialsService } from 'src/app/services/users/user-credentials.service';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {
  [x: string]: any;


arrmyjob:any[]=[];
loggedIn : Boolean=false;
category:any;
empemail:any;
pagecategory:any;
id:any;
skills:any;
skillset:any;
jobid:any;
date:any;
dateposted:any;

  constructor(private http: HttpClient,private router : Router, private service: JobseekerserviceService, private userCred:UserCredentialsService,private route: ActivatedRoute) {

    this.route.queryParamMap.subscribe(params =>{
       
      this.id= this.route.snapshot.queryParams['job_id'];
        if(this.id){
        console.log(this.id);
        this.myjobs();
      }
    })

   }

  ngOnInit(): void {

    
  
  }
  navigate(){
  this.router.navigate(['/applynow'],{ queryParams: {job_id: this.id } });
  }


  myjobs()
  {
    
    this.service.FetchJobpostdata().subscribe(async(res) => {
        
      let n = 0;
      
      //this.bool = 0;
        for (let i in res) 
        {
          let obj:any = Object.values(res)[n++];
          
          for(let i of obj)
          {
             
              if (i.attributes.job_id == this.id)
              {
                console.log(i.attributes.createdAt);
                this.dateposted = i.attributes.createdAt;
                
                this.date= this.dateposted.split('T')[0];
                //console.log(this.date);

                this.arrmyjob.push(i.attributes);
                this.skills = i.attributes.skills;
                this.skillset=JSON.parse(this.skills);
                console.log(this.skillset);
                
                
                      
              }
             
          }
        }
      console.log(this.arrmyjob);
      })
  
     
}

    

  
}
