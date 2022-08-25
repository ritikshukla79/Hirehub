import { Component, OnInit, ɵɵngDeclareClassMetadata } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postedjobdetails',
  templateUrl: './postedjobdetails.component.html',
  styleUrls: ['./postedjobdetails.component.css']
})
export class PostedjobdetailsComponent implements OnInit {
  dateToday: number = Date.now();
  myDate = new Date();
  y: any;
  loggedIn: any;
  empemail: any;
  employeemail:any;
  ls_date:any;
  buttontxt="Reject";
  date:any;
  id: any;

  constructor(private service: JobserviceService, private http: HttpClient,private route: ActivatedRoute) {
    this.myDate = new Date();
  const newItemList = this.arrmyjob.filter(({ ls_date }) => new Date(ls_date) > this.myDate)
  console.log(newItemList);
    this.route.queryParamMap.subscribe(
      params=> {
  
        this.empemail=params.get('email');
        console.log(this.empemail);

      })

  }

  p: number = 1;
  tablesize: number = 3;
  tablesizes: any = [3, 6, 9];
  count: number = 0;
  arrmyjob: any[] = [];
  ngOnInit(): void {
    this.myjobs();
  }

  comp: any;

 async  myjobs() {
  this.service.getjobposts().subscribe(async(res) => {
    let n = 0;
    //this.bool = 0;
    for (let i in res) {
      let obj:any = Object.values(res)[n++];
     //console.log(obj);
      for(let i of obj)
      {
     // console.log(i.attributes.empemail+"...."+this.empemail);
      if (i.attributes.empemail == this.empemail)
      {
        //console.log(i.id);
        this.arrmyjob.push(i);
        console.log(this.arrmyjob);
        this.date=i.attributes.ls_date;
        this.id=i.id;
      console.log(this.date);
      console.log(this.id);

       // console.log(username+"..."+this.comp+"..");
      }
    }
}
  })

 }
    del(data:any,data2:any){
    console.log(data);
    console.log(data2);
    this.http.delete("https://strapi-jobs.herokuapp.com/api/job-posts"+"/"+data2).subscribe(res=>{
      console.log(res);''
    });
}
onTableSizeChange(event: any):  void{
  this.tablesize=event.target.value;
  this.p=1;
  this.myjobs();
}  

onTableDataChange(event: any):  void{
  
  this.p=event;
 // this.myjobs();
}  
searchnam(data1:any, data2:any){
  if(data1.length==0 && data2.length==0)
  {
   this.arrmyjob=this.arrmyjob; 
  }
  else if(data1.length==0)
  {
    this.arrmyjob=this.arrmyjob.filter(
      item=> item.location.indexOf(data2)>0  );

  }
  else  if(data2.length==0)
  {
    this.arrmyjob=this.arrmyjob.filter(
      item=> item.job_title.indexOf(data1)>0  );

  }
  else{
  
  this.arrmyjob=this.arrmyjob.filter(
    item=>item.job_title.indexOf(data1)>0 && item.location.indexOf(data2)>0  );

    console.log(this.arrmyjob);
   // this.orig();
  }  
}

}


// myjobs()
//
// console.log("we are here in mypostedjobcomp");

//     this.service.callfunc().subscribe(async(res) => {
//     let n = 0;
//     //this.bool = 0;
//     for (let i in res) {
//       let obj:any = Object.values(res)[n++];
//       console.log(obj);
//       for(let i of obj)
//       {
//       console.log(i.attributes.empemail+"...."+this.empemail);
//       if (i.attributes.empemail == this.empemail)
//       {
//         this.arrmyjob.push(i.attributes);
//         console.log(JSON.stringify(this.arrmyjob)+"....");
//         let username=i.attributes.desc;
      
//         this.comp=i.attributes.company;
//         console.log(this.comp);

//         console.log(username+"..."+this.comp+"..");
               
//       }
//     }
// }
//   })
//   this.myjobposted=this.arrmyjob;

//   this.y=this.arrmyjob.length;
// }

