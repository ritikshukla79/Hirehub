import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, retry } from 'rxjs/operators';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';
import { UserCredentialsService } from 'src/app/services/users/user-credentials.service';

@Component({
  selector: 'app-mypostedjob',
  templateUrl:'./mypostedjob.component.html',
  styleUrls: ['./mypostedjob.component.css']
})
export class MypostedjobComponent implements OnInit {
  y:any;
  k:any;
  loggedIn: any;
  empemail: any;
  myjobposted: any[]=[];

  constructor(private service : JobserviceService, private userCred: UserCredentialsService) {  

   }

   componentname="mypostedjob"
   p:number=1;
   tablesize:number=3;
   tablesizes:   any = [3,6,9];
   count:number=0;
  arrmyjob:any[]=[];
  ngOnInit(): void {

    this.userCred.decodeToken().then((res:any) => {
        
      if (res) {
        this.loggedIn = true;
        this.empemail = res.data.email;
        console.log(this.empemail);
        this.myjobs();
    
        
      } else {

        this.loggedIn = false;
        
      }
    });

   
  }

comp:any;

  myjobs()
{
//   let filterjob:any;
//  filterjob =this.jobb.filter(d => d.empemail==101);

//   console.log("completed course"+ JSON.stringify(filterjob));
console.log("we are here in mypostedjobcomp");

    this.service.getjobposts().subscribe(async(res) => {
    let n = 0;
    //this.bool = 0;
    for (let i in res) {
      let obj:any = Object.values(res)[n++];
      console.log(obj);
      for(let i of obj)
      {
      console.log(i.attributes.empemail+"...."+this.empemail);
      if (i.attributes.empemail == this.empemail)
      {
        this.arrmyjob.push(i.attributes);
        console.log(JSON.stringify(this.arrmyjob)+"....");
        let username=i.attributes.desc;
      
        this.comp=i.attributes.company;
        console.log(this.comp);

        console.log(username+"..."+this.comp+"..");
               
      }
    }
}
  })
  this.myjobposted=this.arrmyjob;

  this.y=this.arrmyjob.length;
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
   this.myjobposted=this.arrmyjob; 
  }
  else if(data1.length==0)
  {
    this.myjobposted=this.arrmyjob.filter(
      item=> item.location.indexOf(data2)>=0  );

  }
  else  if(data2.length==0)
  {
    this.myjobposted=this.arrmyjob.filter(
      item=> item.job_title.indexOf(data1)>=0  );

  }
  else{
  
  this.myjobposted=this.arrmyjob.filter(
    item=>item.job_title.indexOf(data1)>=0 && item.location.indexOf(data2)>=0  );

    console.log(this.myjobposted);
   // this.orig();
  }  
}

// deletejob(id:any)
// {
//   console.log(id,"id from firebase");
//   this.service.callfunc().subscribe(async(res) => {
//     let n = 0;
//     //this.bool = 0;
//     for (let i in res) {
//       let obj = Object.values(res)[n++];
//       this.k=Object.keys(res)[n];
//       console.log(obj.id+".."+id);
//       if (obj.id == id)
//       {
//         console.log(n,"..");
//          this.k=Object.keys(res)[n];
//          console.log(JSON.stringify(this.k));
//       }
//     }
//   })
//   console.log("here we are!")
//   console.log(this.k);
//   this.service.deletejob(this.k).subscribe();
//     {
//     //   let n=0;
//     //   for (let i in res) {
//     //     let obj = Object.values(res)[n++];
//     //     if(obj.id==id)
//     //     {
          
//     //     }
//     //   }

   
//   }


 


// }
}