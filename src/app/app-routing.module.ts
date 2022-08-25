import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostedjobdetailsComponent } from "./components/admin/postedjobdetails/postedjobdetails.component";
import { UserdetailsComponent } from "./components/admin/userdetails/userdetails.component";
import { ApplicantprofileComponent } from "./components/employer/applicantprofile/applicantprofile.component";
import { JobapplicantsComponent } from "./components/employer/jobapplicants/jobapplicants.component";
import { JobsComponent } from "./components/employer/jobs/jobs.component";
import { MypostedjobComponent } from "./components/employer/mypostedjob/mypostedjob.component";
import { ShowcandidateComponent } from "./components/employer/showcandidate/showcandidate.component";

import { ApplicantComponent } from "./components/jobseeker/applicant/applicant.component";
import { AppliedJobsComponent } from "./components/jobseeker/applied-jobs/applied-jobs.component";
import { JoblistComponent } from "./components/jobseeker/joblist/joblist.component";
import { JobseekerComponent } from "./components/jobseeker/jobseeker.component";
import { AboutComponent } from "./components/others/about/about.component";
import { BlogsComponent } from "./components/others/blogs/blogs.component";
import { ContactUsComponent } from "./components/others/contact-us/contact-us.component";
import { faqComponent } from "./components/others/faq/faq.component";
import { ForgetComponent } from "./components/users/forget/forget.component";
import { HomeComponent } from "./components/users/home/home.component";
import { LoginComponent } from "./components/users/login/login.component";
import { SignupComponent } from "./components/users/signup/signup.component";
import { SubscriptionComponent } from "./components/users/subscription/subscription.component";
import { ProfileComponent } from "./components/users/profile/profile.component";
import { BuySubscriptionComponent } from "./components/users/buy-subscription/buy-subscription.component";
import { ApplieduserComponent } from "./components/admin/applieduser/applieduser.component";
import { CanJobService } from "./services/users/can-job.service";
import { NotfoundComponent } from "./components/users/notfound/notfound.component";
import { AuthGuardService } from "./services/users/auth-guard.service";
import { AlljobsComponent } from "./components/admin/alljobs/alljobs.component";
import { ServiceprofileService } from "./services/users/serviceprofile.service";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent, canActivate : [AuthGuardService] },
  { path: "signin", component: LoginComponent, canActivate : [AuthGuardService] },
  { path: "addjob", component: JobsComponent },
  { path: "jobdetails", component: JobseekerComponent},
  { path: "joblist/:category", component: JoblistComponent },
  { path: "joblist", component: JoblistComponent, canActivate : [CanJobService] },
  { path: "appliedjobs", component: AppliedJobsComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "forget", component: ForgetComponent },
  { path: "applicant", component: JobapplicantsComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "appprofile", component: ApplicantprofileComponent },
  { path: "faq/blogs", component: BlogsComponent },
  { path: "faq", component: faqComponent },
  { path: "applynow", component: ApplicantComponent,  canActivate : [CanJobService] },
  { path: "myjob", component: MypostedjobComponent },
  { path: "about", component: AboutComponent },
  { path: "admin", component: PostedjobdetailsComponent },
  { path: "subscription/:type", component: BuySubscriptionComponent },
  { path: "subscription", component: SubscriptionComponent },

  { path: "selected", component: ShowcandidateComponent },
  
  { path: "profile", component: ProfileComponent, canActivate : [ServiceprofileService] },
  {path: "postedjobs",component:PostedjobdetailsComponent},
  {path:"applied",component:ApplieduserComponent},
  {path:"userdetails",component:UserdetailsComponent},
  {path : "notfound", component : NotfoundComponent, canActivate : [CanJobService]},
  {path:"alljobs",component:AlljobsComponent},

  {path:"**",component:HomeComponent},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
