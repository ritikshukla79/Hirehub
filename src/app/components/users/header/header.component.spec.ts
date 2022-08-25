import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from "./header.component";

import { HttpClientModule } from "@angular/common/http";
import { SignupComponent } from "../signup/signup.component";
import { LoginComponent } from "../login/login.component";
import { Router } from "@angular/router";

import { routes } from "../../../app-routing.module";
import { Location } from "@angular/common";

// const isAuthenticated = (): Promise<boolean> => {
//   return Promise.resolve(!!localStorage.getItem("token"));
// };

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
      declarations: [HeaderComponent, SignupComponent, LoginComponent],
      // providers: [{
      //   addCookie: GenerateTokenService,
      //   userCred: UserCredentialsService
      // }]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("should contain word HireHub", () => {
  //   let pf = fixture.debugElement.query(By.css(".logo"));
  //   let el: HTMLElement = pf.nativeElement;
  //   expect(el.innerText).toContain("HireHub");
  // });
});
