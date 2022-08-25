import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UpdateSubscriptionService } from "src/app/services/users/update-subscription.service";
import { UserCredentialsService } from "src/app/services/users/user-credentials.service";
import coupon from "../../../../assets/coupon.json";

declare var Razorpay: any;

@Component({
  selector: "app-buy-subscription",
  templateUrl: "./buy-subscription.component.html",
  styleUrls: ["./buy-subscription.component.css"],
})
export class BuySubscriptionComponent implements OnInit {
  subscriptionType: any = "";
  price: number = 0;
  couponArray: any = [{ couponName: "Select a coupon", discount: 0 }];
  discountedPrice: number = 0;
  showModal: any = false;
  currentUser: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private credUser: UserCredentialsService,
    private updateSub: UpdateSubscriptionService
  ) {
    this.credUser.decodeToken().then((res) => {
      if (res && res.data) {
        this.currentUser = res.data;
        Object.entries(coupon).forEach((e, idx) => {
          // for looping every employer for a perticular key
          e[1].employers.forEach((employer) => {
            if (res.data.email === employer) {
              this.couponArray.push({ couponName: e[0], discount: e[1].discount }); // e[0] = coupon key
            }
          });
        });

        console.log(this.couponArray);
      }
    });

    this.activatedRoute.params.subscribe((params) => {
      this.subscriptionType = params["type"];
      if (this.subscriptionType === "Premium") {
        this.price = this.discountedPrice = 40;
      } else if (this.subscriptionType === "Advance") {
        this.price = this.discountedPrice = 20;
      } else {
        this.price = this.discountedPrice = 10;
      }
    });
  }

  onCouponChange = (val: any) => {
    this.discountedPrice = this.price;
    this.couponArray.forEach((e: any) => {
      if (e.couponName === val) {
        this.discountedPrice = this.price - e.discount;
      }
    });
  };

  buyNowBtnHandler = () => {
    this.currentUser.subscription = this.subscriptionType;
    this.updateSub.updateSubscription(this.currentUser);

    var razorPayOptions: any = {
      key: "rzp_test_0pYwXeyccmdasV",
      name: "sagar",
      amount: this.discountedPrice * 100,
      status: "authorized",
      currency: "INR",
      handler: function (response: any) {
        // alert(response.razorpay_payment_id);
        console.log("success");
        alert("Payment Success");
      },
      modal: {
        ondismiss: function () {
          console.log("Checkout form closed");

          alert("Payment Failure");
        },
      },
    };

    var rzp1 = new Razorpay(razorPayOptions);
    rzp1.open();
  };

  show() {
    this.showModal = true; // Show-Hide Modal Check
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  ngOnInit(): void {}
}
