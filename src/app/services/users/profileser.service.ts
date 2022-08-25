import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileserService {

  constructor(private http : HttpClient) { }

  imagefun(data : any, token : any)
  {

    let formdata = new FormData();
    formdata.append("files", data);
    formdata.append("ref", "plugin::users-permissions.user");
    formdata.append("field", "profileImage");
    formdata.append("refId", String(token.id));
    return this.http.post(`https://strapi-jobs.herokuapp.com/api/upload/`, formdata).pipe();

  }
  updateimageid(res : any, element : any)
  {
    return this.http.put(`https://strapi-jobs.herokuapp.com/api/users/${element}`, res);
  }
  imagegetter(id : any)
  {    
    return this.http.get(`https://strapi-jobs.herokuapp.com/api/upload/files/${id}`).pipe();
  }

}