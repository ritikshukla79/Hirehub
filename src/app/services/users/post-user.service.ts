import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostUserService {
  constructor() {}

  postUser = (cred: any) => {
    console.log(cred);
    return fetch("https://strapi-jobs.herokuapp.com/api/auth/local/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cred),
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);

        if (responseData && !responseData.error) return responseData;
        else return null;
      });
  };
}
