import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobseekerserviceService } from 'src/app/services/jobseeker/jobseekerservice.service';
import { UserCredentialsService } from 'src/app/services/users/user-credentials.service';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';
import { jobseeker } from '../../models/jobseeker';
@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  name="user"
  empemail: any;
  category:any;
  data:any;
  comp:any;
  y:any;
  desc:any;
  jobtitle:any;
  arrmyjob:any[]=[];
  joblist :any[]=[];
  location:any;
  id:any;

  loggedIn : Boolean=false;
  

  p:number=1;
  tablesize:number=3;
  tablesizes:   any = [5,10,15,20,25,30];
  count:number=0;
 
  collection = { count: 60, data: [] };
  

  constructor(private router: Router, private service: JobseekerserviceService,private http: HttpClient, private userCred: UserCredentialsService, private jobservice:JobserviceService, private route: ActivatedRoute) {
    
    this.route.params.subscribe((params) =>{
      this.category= params['category'];
        if(this.category){
          console.log(params['category']);
          this. myjobs();
        }
        else{
          this.showdata();
        }
     
    })
   
   }

  ngOnInit(): void {
  }

  myjobs()
  {
  
  
      this.service.FetchJobpostdata().subscribe(async(res) => {
        
      let n = 0;
      
      for (let i in res) {
        let obj = Object.values(res)[n++];
        for (let i of obj){
          if (i.attributes.category == this.category)
        {
          
          this.arrmyjob.push(i.attributes);
          this.id = i.attributes.job_id;

          this.comp=i.attributes.company;     
  
        }

        }
        

      }
      console.log(this.arrmyjob);
      })
      this.joblist = this.arrmyjob;
      this.y=this.arrmyjob.length;
  }

  showdata(){
    this.service.FetchJobpostdata().subscribe(async(res) => {
        
      let n = 0;
      
      for (let i in res) {
        let obj:any = Object.values(res)[n++];
        console.log(obj);
        for(let i of obj)
        {
          
          this.arrmyjob.push(i.attributes);
          this.comp=i.attributes.company;  

        
      }
      }
     
      })

      this.joblist= this.arrmyjob;
      console.log(this.arrmyjob); 
      console.log(this.joblist); 
  
      this.y=this.arrmyjob.length;

  }

  onTableSizeChange(event: any):  void{
    this.tablesize=event.target.value;
    this.p=1;
    this.myjobs();
  }  
  
  onTableDataChange(event: any):  void{
    
    this.p=event;
    this.myjobs();
  }
   
  searchnam(data1:any, data2:any){
    if(data1.length==0 && data2.length==0)
    {
      console.log('00');
     this.joblist=this.arrmyjob; 
    }
    else if(data1.length==0)
    { 
      console.log('01');
      this.joblist=this.arrmyjob.filter(
        item=> item.location.toLowerCase() === data2.toLowerCase() ||  item.location.indexOf(data2)!= -1 );
  
    }
    else  if(data2.length==0)
    {
      console.log('10');
      this.joblist=this.arrmyjob.filter(
        item=> item.company.toLowerCase() === data1.toLowerCase() || item.company.indexOf(data1)!= -1 );
  
    }
    else{
      console.log('11');
    this.joblist=this.arrmyjob.filter(
      item=>item.company.toLowerCase() === data1.toLowerCase() && item.location.toLowerCase() === data2.toLowerCase()  );
  
      console.log(this.joblist);
     // this.orig();
    }  
  }
  

}
