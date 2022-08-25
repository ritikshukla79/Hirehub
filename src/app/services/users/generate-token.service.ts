import { Injectable } from "@angular/core";
import { UserCredentialsService } from "./user-credentials.service";

@Injectable({
  providedIn: "root",
})
export class GenerateTokenService {
  constructor() {}

  // NOTE: Works only from http://localhost:4200/
  setCookieToken = (token: any) => {
    return fetch("https://protected-stream-69507.herokuapp.com/auth/signin", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(token),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else return null;
      })
      .then((data): any => {
        if (data) {
          return data;
        } else {
          return null;
        }
      });
  };

  removeCookie = () => {
    return fetch("https://protected-stream-69507.herokuapp.com/removecookie", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    }).then((res) => {
      if (res.ok) return res.json();
      else return null;
    });
  };
}
