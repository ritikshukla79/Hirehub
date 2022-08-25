import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/users/header/header.component";
import { HomeComponent } from "./components/users/home/home.component";
import { SignupComponent } from "./components/users/signup/signup.component";
import { LoginComponent } from "./components/users/login/login.component";
import { ForgetComponent } from "./components/users/forget/forget.component";
import { JobsComponent } from "./components/employer/jobs/jobs.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactUsComponent } from "./components/others/contact-us/contact-us.component";
import { HttpClientModule } from "@angular/common/http";
import { JobapplicantsComponent } from "./components/employer/jobapplicants/jobapplicants.component";
import { ApplicantprofileComponent } from "./components/employer/applicantprofile/applicantprofile.component";
import { ApplicantComponent } from "./components/jobseeker/applicant/applicant.component";
import { faqComponent } from "./components/others/faq/faq.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MypostedjobComponent } from "./components/employer/mypostedjob/mypostedjob.component";
import { FooterComponent } from "./components/users/footer/footer.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BlogsComponent } from "./components/others/blogs/blogs.component";
import { AboutComponent } from "./components/others/about/about.component";
import { jobseeker } from "./components/models/jobseeker";
import { JobseekerComponent } from "./components/jobseeker/jobseeker.component";
import { JoblistComponent } from "./components/jobseeker/joblist/joblist.component";
import { AppliedJobsComponent } from "./components/jobseeker/applied-jobs/applied-jobs.component";
import { PostedjobdetailsComponent } from "./components/admin/postedjobdetails/postedjobdetails.component";
import { UserdetailsComponent } from './components/admin/userdetails/userdetails.component';
import { NgxPaginationModule } from "ngx-pagination";
import { ShowcandidateComponent } from "./components/employer/showcandidate/showcandidate.component";
import { ProfileComponent } from "./components/users/profile/profile.component";
import { SubscriptionContentComponent } from "./components/users/subscription-content/subscription-content.component";
import { SubscriptionComponent } from "./components/users/subscription/subscription.component";
import { BuySubscriptionComponent } from './components/users/buy-subscription/buy-subscription.component';
import { ApplieduserComponent } from './components/admin/applieduser/applieduser.component';
import { ToastrModule } from "ngx-toastr";
import { NotfoundComponent } from './components/users/notfound/notfound.component';
import { AlljobsComponent } from './components/admin/alljobs/alljobs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    ForgetComponent,
    JobsComponent,
    ContactUsComponent,
    JobapplicantsComponent,
    ApplicantprofileComponent,
    ApplicantComponent,
    faqComponent,
    MypostedjobComponent,
    FooterComponent,
    BlogsComponent,
    AboutComponent,
    JobseekerComponent,
    JoblistComponent,
    AppliedJobsComponent,
    PostedjobdetailsComponent,
    UserdetailsComponent,
    ShowcandidateComponent,
    ProfileComponent,

    SubscriptionComponent,
    SubscriptionContentComponent,
    BuySubscriptionComponent,
    ApplieduserComponent,
    NotfoundComponent,
    AlljobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
