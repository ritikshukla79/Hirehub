import { Component, HostListener, OnInit } from "@angular/core";
import { Event, NavigationEnd, Router } from "@angular/router";
import { AuthGuardService } from "src/app/services/users/auth-guard.service";
import { GenerateTokenService } from "src/app/services/users/generate-token.service";
import { UserCredentialsService } from "src/app/services/users/user-credentials.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  role: any;
  headerScrolled: any = "";
  loading: boolean = false;
  haveSubscription: boolean = false;

  constructor(
    private router: Router,
    private userCred: UserCredentialsService,
    private cookieToken: GenerateTokenService,
    private authGuard: AuthGuardService
  ) {
    this.loading = true;
    this.userCred.decodeToken().then((res: any) => {
      this.loading = false;

      if (res && res.data) {
        this.loggedIn = true;
        this.role = this.authGuard.role = res.data.role;

        if (res.data.subscription && res.data.subscription != "") {
          this.haveSubscription = true;
        } else {
          this.haveSubscription = false;
        }
      } else {
        this.loggedIn = false;
      }
    });

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url) {
          window.scroll(0, 0);
        }
        if (event.url === "/") {
          this.loading = true;
          this.userCred.decodeToken().then((res: any) => {
            this.loading = false;

            if (res && res.data) {
              this.loggedIn = true;
              this.role = this.authGuard.role = res.data.role;
              console.log(this.authGuard.role);

              if (res.data.subscription && res.data.subscription != "") {
                this.haveSubscription = true;
              } else {
                this.haveSubscription = false;
              }
            } else {
              this.loggedIn = false;
            }
          });
        }
      }
    });
  }

  logoutBtnHandler = () => {
    this.loading = true;
    this.cookieToken.removeCookie().then((res) => {
      console.log(res);
      this.loading = false;
      if (res) {
        this.loggedIn = this.authGuard.islogin = false;
        this.role = null;
        this.authGuard.role = "";
        this.router.navigate([""]);
        location.reload();

      }
    });
  };

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (offset > 50) {
      this.headerScrolled = "scrolled";
    } else {
      this.headerScrolled = "";
    }
  }

  ngOnInit(): void {}
}
