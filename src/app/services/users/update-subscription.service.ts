import { Injectable } from "@angular/core";
import { UserCredentialsService } from "./user-credentials.service";

@Injectable({
  providedIn: "root",
})
export class UpdateSubscriptionService {
  constructor(private usercred: UserCredentialsService) {}

  updateSubscription = async (userObj: any) => {
    const token = await this.usercred.getCookieToken();
    const obj = {
      email: userObj.email,
      mobile: userObj.mobile,
      password: userObj.password,
      subscription: userObj.subscription,
      userRole: userObj.role,
      username: userObj.name,
    };
    return fetch(`https://strapi-jobs.herokuapp.com/api/users/${userObj.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
}
