import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class UserCredentialsService {
  constructor(private http: HttpClient) {}

  getCookieToken = () => {
    try {
      return fetch("https://protected-stream-69507.herokuapp.com/getcookietoken", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            return data;
          } else {
            return null;
          }
        })
        .catch((err) => {
          return null;
        });
    } catch (err) {
      return null;
    }
  };

  decodeToken = async () => {
    const token = await this.getCookieToken();
    if (token && !token.message) {
      return fetch("https://strapi-jobs.herokuapp.com/api/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && !data.error) {
            return {
              data: {
                id: data.id,
                email: data.email,
                password: data.password,
                mobile: data.mobile,
                name: data.username,
                role: data.userRole,
                subscription: data.subscription,
                profileImage: data.profileImage,
                profileId : data.profileId,
              },
            };
          } else {
            return null;
          }
        });
    } else {
      return null;
    }
  };
}
