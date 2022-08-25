import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobserviceService } from 'src/app/services/jobposts/jobservice.service';
import { ProfileserService } from 'src/app/services/users/profileser.service';

@Component({
  selector: 'app-showcandidate',
  templateUrl: './showcandidate.component.html',
  styleUrls: ['./showcandidate.component.css']
})
export class ShowcandidateComponent implements OnInit {
  idd: any;
  job_id: any;
  emaill: any;
  accepted: any[]=[];
  accepted2: any[]=[];
  acceptval:any;
  ct:any=0;
  profileid: any;
  profileimage: any;
  isthereimage: number=0;

  constructor(private route: ActivatedRoute, private service: JobserviceService, private profileservice: ProfileserService) { 
    this.route.queryParamMap.subscribe(
      params=> {
  
      this.job_id= params.get('job_id');
      })

   
  }


  getmethod() {
    this.service.getAcceptdata().subscribe(async(res) => {
      let n = 0;
      //this.bool = 0;
      for (let i in res) {
        let obj = Object.values(res)[n++];
       // console.log(JSON.stringify(obj));
        for(let i of obj)
        {
        
       // console.log(i.attributes);
        if(i.attributes.accept=="1" && i.attributes.job_id==this.job_id)
        {
          this.acceptval=i.attributes.accept;
        this.emaill=i.attributes.empemail;
        this.idd=i.attributes.job_id;
        this.getprofilepic(this.emaill);
        this.pushtoarray(this.emaill);
        }
        // console.log(obj.acceptedcandidate)
        // console.log(obj.pendingcandidate)
         }
        //  let candidate=obj.acceptedcandidate;
          
        // if(obj.acceptedcandidate.job_id==this.job_id)
        // {
        //   candidate.push(obj.acceptedcandidate)
        //   this.idd= obj.acceptedcandidate[i];
        //   this.emaill=obj.acceptedcandidate[i].job_id;
        //   console.log(obj.acceptedcandidate[i].job_id);
        // }
      
      }
    })

   
    
  }


  getprofilepic(emaill: any) {

    this.service.getuserdata().subscribe(async(res) => {
      let n = 0;
      //this.bool = 0;
      for (let i in res) {
        let obj = Object.values(res)[n++];
       // console.log(this.email);
         console.log(obj.email+".."+emaill);
        if (obj.email == emaill)
        {

         this.profileid= obj.profileId;
         console.log(this.profileid);
         this.profileservice.imagegetter(this.profileid).subscribe((res : any)=>{
          console.log(res);
        obj.profileimage = "https://strapi-jobs.herokuapp.com" + res.url;
        console.log(this.profileimage);
        if(res.url==null)
        {
          
       // res="/data:image/png;base64,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";
        }
        else
        {
          this.isthereimage = 1000;
                }
        // this.profile  = res?.data;
        // console.log(this.profile);
        // this.name = this.profile.name;
        // this.phone = this.profile.mobile;
        // this.email = this.profile.email
        // this.role = this.profile.role;
     });  

            
        
       

        }
        else
        {
        this.isthereimage=0;
        }
      }
    })
  
  

    
  }


  pushtoarray(email:any) {
    this.service.showjobseekerdata().subscribe(async(res) => {
      let n = 0;
      //this.bool = 0;
      for (let i in res) {
        let obj = Object.values(res)[n++];
        console.log(obj);
    
        for(let i of obj)
        {
         
          console.log(i);
         //console.log(i.attributes.email+".." + this.emaill);
         if(i.attributes.email==email && i.attributes.job_id==this.job_id && this.acceptval=="1")
         {
          console.log("matched");
          this.accepted.push(i.attributes);
          console.log(this.accepted);
         // return this.applicant;
        // let i;
        //  for(i=0;i<this.applicant.length;i++)
        //  {
        //    this.mylist04(this.applicant[i]);
        //  }

         }
        }
      }
    })
    this.accepted2=this.accepted;
  }


  searchnam(data1:any, data2:any){
    if(data1.length==0 && data2.length==0)
    {
     this.accepted2=this.accepted; 
    }
    else if(data1.length==0)
    {
      this.accepted2=this.accepted.filter(
        item=> item.address.indexOf(data2)>0  );
  
    }
    else  if(data2.length==0)
    {
      this.accepted2=this.accepted.filter(
        item=> item.jobseekeername.indexOf(data1)>0  );
  
    }
    else{
    
    this.accepted2=this.accepted.filter(
      item=>item.jobseekername.indexOf(data1)>0 && item.address.indexOf(data2)>0  );

      console.log(this.accepted2);
     // this.orig();
    }  
  }
  ngOnInit(): void {
    this.getmethod();
  }


}
