import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';

@Component({
  selector: 'app-jobapplicants',
  templateUrl: './jobapplicants.component.html',
  styleUrls: ['./jobapplicants.component.css']
})
export class JobapplicantsComponent implements OnInit {
  name: any;
  applicantdata:any[]=[];
  category: any;
  job_id: any;
  applicant: any[]=[];
  accepted2: any[]=[];
  p:number=1;
  tablesize:number=3;
  tablesizes:   any = [3,6,9];
  count:number=0;

  constructor(private service: JobserviceService, private route: ActivatedRoute) { 
    this.route.queryParamMap.subscribe(
      params=> {
  
   this.category=params.get('category');
   this.job_id= params.get('job_id');
      })

  }

  ngOnInit(): void {

    this.getapplicant();
  }



  getapplicant() {
    this.service.showjobseekerdata().subscribe(async(res) => {
      let n = 0;
      //this.bool = 0;
      for (let i in res) {
        let obj = Object.values(res)[n++];
        console.log(obj);
    
        for(let i of obj)
        {
          console.log("here are our attributes", i.attributes);
         console.log(i.attributes.job_id+".." + this.job_id);
         if(i.attributes.job_id==this.job_id)
         {
          console.log("matched");
          this.applicantdata.push(i.attributes);
          console.log(this.applicantdata);
      

         }
        }
      }
    })
    this.accepted2=this.applicantdata;
    let i:any;
    //console.log("finally")
   
   
  }



  // mylist04(email:any) {

  //   console.log(email+"");
  //   this.service.callfunc2().subscribe(async(res) => {
  //     let n = 0;
  //     //this.bool = 0;
  //     for (let i in res) {
  //       let obj = Object.values(res)[n++];
  //        console.log(obj.jobseeker_details.email+".."+email);
  //       if (obj.jobseeker_details.email == email)
  //       {
  //         this.applicantdata.push(obj.jobseeker_details);
          
  //        // this.imgurl=obj.jobseeker_details.resume;
  //        // console.log(this.imgurl);

  //       }
  //     }
     
  //     console.log(JSON.stringify(this.applicantdata)+"...");
  //   })
  
    

  // }

  searchnam(data1:any, data2:any){
    if(data1.length==0 && data2.length==0)
    {
      this.accepted2=this.applicantdata;
    }
    else if(data1.length==0)
    {
      this.accepted2=this.applicantdata.filter(
        item=> item.address.indexOf(data2)>=0  );
  
    }
    else  if(data2.length==0)
    {
      this.accepted2=this.applicantdata.filter(
        item=> item.jobseekername.indexOf(data1)>=0  );
  
    }
    else{
    
    this.accepted2=this.applicantdata.filter(
      item=>item.jobseekername.indexOf(data1)>=0 && item.address.indexOf(data2)>=0  );

      console.log(this.accepted2);
     // this.orig();
    }  
  }

  onTableSizeChange(event: any):  void{
    this.tablesize=event.target.value;
    this.p=1;
    this.getapplicant();
  }  
  
  onTableDataChange(event: any):  void{
    
    this.p=event;
    
  }  


//   mylist()
// {
    
//   this.service.callfunc().subscribe(async(res) => {
//     let n = 0;
//     //this.bool = 0;
//     for (let i in res) {
//       let obj = Object.values(res)[n++];
   
//       if (obj.email == this.email && this.ct==0)
//       {
//         this.ct=1;
//         this.username=obj.fullname;
//        let res:any[];
//         res= this.username.split(' ');
//         let i;
//         for(i=0;i<res.length;i++)
//         {
//           this.result+=res[i][0];
//           console.log(res[i]);
//         }
//         //this.result=this.username.slice(0,1);
//         console.log(this.result+"...");
//        // this.f=this.username.substring(0,1);
//         this.useremail=obj.email;
//         this.usermobile=obj.mobile;
//         this.userrole=obj.role;

//         console.log(this.useremail+"..."+this.usermobile+".."+this.userrole);
//                // this.f=this.username.substring(0,1);
//         console.log("..res."+this.result);
        

//       }
// }
//   })
// }

// //calling service to fetch mycourses table from firebase
// mylist03()
// {
//   console.log("....");
//   this.service.callfunc2().subscribe(async(res) => {
//     let n = 0;
//     //this.bool = 0;
//     for (let i in res) {
//       let obj = Object.values(res)[n++];

//       if (obj.email == this.email)
//       {
//        this.mycourses=obj.courses_enrolled;
//        console.log(obj.courses_enrolled+".....");
//        console.log(this.mycourses.length);
//        let i;
//        for(i=0;i<this.mycourses.length;i++)
//        {
//          this.mylist04(this.mycourses[i]);
//        }

//       }
// }
//   })
// }


// mylist04(data:any)
// {
//   this.service.callfunc3().subscribe(async(res) => {
//     let n = 0;
//     //this.bool = 0;
//     for (let i in res) {
//       let obj = Object.values(res)[n++];
//      // console.log(data+"..."+obj.id);
//       if (obj.id == data)
//       {
//      //   console.log(obj.id+"..."+data);
//          this.coursename.push(obj.name);
        
      
//       }
//     }
//   })
//  // console.log(this.coursename," name of courses");
// }

}
