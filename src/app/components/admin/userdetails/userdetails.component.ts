import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';
import { UserCredentialsService } from 'src/app/services/users/user-credentials.service';



@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
 
  p:number=1;
  tablesize:number=4;
  tablesizes:   any = [5,10,15];
  count:number=0;
  jobseeker: any[]=[];
email:any;
job_id:any;
mobile:any;
name:any;
userRole:any;
employee:any[]=[];
id:any;
role:any;
obj:any;
user2:any[]=[];
user:any[]=[];
array:any[]=[];
removearr:any=[{buttontxt:"Reject"}]
delete(){
  this.removearr.splice(0,1);
}


  constructor(private route: ActivatedRoute, private service: JobserviceService) { 
    this.route.queryParamMap.subscribe(
      params=> {
        this.email= this.route.snapshot.queryParams['email'];
        this.job_id= this.route.snapshot.queryParams['job_id'];
       // console.log(this.job_id);
        
      })
  }
  async userdetails() {
  await this.service.getuserdata().subscribe(async(res) => {
      let n = 0;
      //this.bool = 0;
    ///  for (let i in res) {
        let obj = Object.values(res);
       // console.log(this.email);
         //console.log(obj.email+".."+this.email);
         this.user2=Object.values(obj);
        // console.log(Object.values(this.user2));
         
 // }
 console.log(this.user2);
  this.jobseeker = this.user2.filter(e => e.userRole.includes("Job Seeker"));
console.log(this.jobseeker);
this.employee = this.user2.filter(e => e.userRole.includes("Employer"));
console.log(this.employee);
})
  }
 
  
  ngOnInit(): void {
    this.userdetails();
  }

}
