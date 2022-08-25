import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetUserService {
  constructor() {}

  authUser = (cred: any) => {
    return fetch("https://strapi-jobs.herokuapp.com/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: cred.email,
        password: cred.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
}
