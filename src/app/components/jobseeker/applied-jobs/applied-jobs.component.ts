import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';
import { JobseekerserviceService } from 'src/app/services/jobseeker/jobseekerservice.service';
import { UserCredentialsService } from 'src/app/services/users/user-credentials.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  p:number=1;
  tablesize:number=4;
  tablesizes:   any = [5,10,15,20,25,30];
  count:number=0;
  useremail:any;
  loggedIn: boolean = false;
  id:any; 
  jobid:any;
  armyjob:any[]=[]; 
  appliedjob:any[]=[];
  jobseekerar:any[]=[];
  yourstatus:any;
  applied_date!:string;
  applied:any;
  default=0;
  Status:any[]=[];
  collection = { count: 60, data: [] };

  constructor(private router: Router, private service: JobseekerserviceService,private http: HttpClient, private userCred: UserCredentialsService, private jobservice:JobserviceService, private route: ActivatedRoute) {
  
    this.userCred.decodeToken().then((res:any) => {
      console.log(res);
      
      if (res) {
          this.loggedIn = true;
          this.useremail = res.data.email;
          console.log(this.useremail);

          this.service.Fetchappliedjob().subscribe(async(res)=>{
            let n = 0;
            
            for (let i in res) {
                  let obj = Object.values(res)[n++];
                  //console.log(res);

                  for(let i of obj)
                  {
                    
                        if(i.attributes.email == this.useremail && !this.armyjob.includes(i.attributes.job_id) ){
                            this.armyjob.push(i.attributes.job_id);
                            this.id = i.attributes.job_id;
                            //console.log(obj);
                            this.service.FetchJobpostdata().subscribe(async(res) => {
                            let n = 0;
                    
                            for (let j in res) 
                            {
                                    let obj2:any = Object.values(res)[n++];
                                    //console.log(obj);
                                    for(let j of obj2)
                                    {
                                      
                                    if (j.attributes.job_id == i.attributes.job_id)
                                    {
                                      this.appliedjob.push(j.attributes);
                                      this.id = i.attributes.job_id;
                                                
                                    }
                                    }
                                    this.showjobseekerdata(this.id);
                                    this.useracceptdata(this.id);
                            }
                          
                            })
                             
                        
                            }
                  }
                  console.log(this.armyjob);
                  //this.showdata();

            }
           
            })
        } 
        else {

            this.loggedIn = false;
        
        }
    });

    
  }

  ngOnInit(): void {

   
  }

  onTableSizeChange(event: any):  void{
    this.tablesize=event.target.value;
    this.p=1;
    //this.myjobs();
  }  
  
  onTableDataChange(event: any):  void{
    
    this.p=event;
    //this.myjobs();
  }
  
  showjobseekerdata(id:any){

    this.service.Fetchjobseekerdata().subscribe(async(res) => {
        
      let n = 0;
      
      //this.bool = 0;
        for (let i in res) 
        {
          let obj:any = Object.values(res)[n++];
          
          for(let i of obj)
          {
             
              if (i.attributes.job_id == id && i.attributes.email == this.useremail)
              {
                //console.log(i.attributes);
                //this.jobseekerar.push(i.attributes);
                this.applied_date = i.attributes.updatedAt;
                this.applied= this.applied_date.split('T')[0];
                //console.log(this.applied);
                      
              }
          }
        }
      //console.log(this.jobseekerar);
      })
  
     

  }


  useracceptdata(id:any){

        this.service.FetchUserAcceptTTable().subscribe(async(res) => {
            
          let n = 0;
          //console.log(res);
          //this.bool = 0;
            for (let i in res) 
            {
              let obj:any = Object.values(res)[n++];
              
              for(let i of obj)
              {
                
                  if (i.attributes.job_id == id && i.attributes.empemail == this.useremail)
                  {
                        //console.log(i.attributes.job_id);
                        this.jobid= i.attributes.job_id;
                        this.Status.push(i.attributes);  
                        this.default =1;  
                          
                  }
                  else{
                      
                    if (this.default ==0 && !this.Status.includes(id)){
                      console.log(id);
                      
                      this.yourstatus = 'hold';  
                    

                    }
                     this.default =0;        
                          
                  }
                  
              }
              console.log(id);
              console.log(this.Status); 
              
            }
            
          })

  }

  
  

}


