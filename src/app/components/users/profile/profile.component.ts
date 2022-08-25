import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/users/auth-guard.service';
import { ProfileserService } from 'src/app/services/users/profileser.service';
import { UserCredentialsService } from 'src/app/services/users/user-credentials.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private userservice  : UserCredentialsService, private authservice : AuthGuardService, private profileService : ProfileserService) { }
  data : any
  per : any;
  alldata : any;
  obj : any;
  savedbio : any;
  subs : string = "";
  status : number = 0;
  phone : any;
  email : any;
  name : string = "";
 
  profileimage : any;
  role : string = "";
  profile : any;
  isthereimage : number = 0;
  current_subs : number = 0;
   ngOnInit(){
    this.imagegetfunc();
    
   }

  
  async profileimagepost($event : any)
  {
    await this.userservice.decodeToken().then(async (res : any)=> {
      console.log("response", res);
    
        let element = res?.data;
        await this.profileService.imagefun($event.target.files[0], element).subscribe((image : any)=>{
          // console.log("image", image);
          // console.log("image", image[0]?.id);
          // console.log("element", element);
        
          let obj = {
            email: res.data.email,
            mobile: res.data.mobile,
            password: res.data.password,
            userRole: res.data.role,
            username: res.data.name,
            subscription : res.subscription,
            profileId : (image[0]?.id).toString(),
            id : res.data.id,
          }
          console.log(typeof(obj.profileId));
          // console.log("object", obj);
          // res.data['profileId'] = image[0]?.id;
           console.log(obj);
          this.profileService.updateimageid(obj, element?.id).subscribe((res1 : any)=>{
            
            console.log(res1);
            this.imagegetfunc();
          })
        });  
    })

  }
  // reloadprofile()
  // {
  //   this.userservice.decodeToken().then(res=>{
  //     this.profile = res;
  //         console.log(this.profile);
  //   })
  // }
  async imagegetfunc()
  {
    await this.userservice.decodeToken().then(res=>{
      let data = res?.data;
      console.log(res);
      // await this.profileService.getalldetailsbyid(data?.profileId).subscribe((res1 : any)=>{
      //  console.log(res1);
      console.log("aaya");
      if(res?.data.profileId != null)
      {
        console.log("aaya1");
          let num = data?.profileId;
          // console.log(num);
           this.profileService.imagegetter(num).subscribe((res2 : any)=>{
            console.log("aaya2")
           this.profileimage = "https://strapi-jobs.herokuapp.com" + res2.url;
          if(this.profileimage == "https://strapi-jobs.herokuapp.com")
            this.isthereimage = 0;
          else
            this.isthereimage = 1;
          this.profile  = res?.data;
          console.log(this.profile);
          this.name = this.profile.name;
          this.name = this.name.toUpperCase();  
          this.phone = this.profile.mobile;
          this.email = this.profile.email
          this.role = this.profile.role;


          if(this.profile.role == "Employer")
          {
    
          console.log("console");
          this.current_subs = this.profile.subscription;
          
          if(this.profile.subscription == null || this.profile.subscription == "")
            this.subs = "Basic";
          else
            this.subs = this.profile.subscription;
          
          }
      })
    }
    else
    {
          console.log("aaya2");
          this.profile  = res?.data;
          this.isthereimage = 0;
          console.log(this.profile);
          this.name = this.profile.name;
          this.name = this.name.toUpperCase();  
          this.phone = this.profile.mobile;
          this.email = this.profile.email
          this.role = this.profile.role;
    }
    console.log(this.role);
     });

     if(this.profile.role == "Employer")
     {

      console.log("console");
      this.current_subs = this.profile.subscription;
      
      if(this.profile.subscription == null || this.profile.subscription == "")
        this.subs = "Basic";
      else
        this.subs = this.profile.subscription;
      
     }
  }
}