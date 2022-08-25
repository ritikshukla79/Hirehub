import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostUserService } from 'src/app/services/users/post-user.service';
import { CustomerrorsValidators } from '../customvalidators';
import { NotificationService } from 'src/app/services/notification/notification.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: PostUserService, private notifyService: NotificationService) { }
  hide = true;
  eye: boolean = false;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, CustomerrorsValidators.passwordcheck]),
    mobile: new FormControl('', [Validators.required, CustomerrorsValidators.check]),
    userRole: new FormControl('', [Validators.required]),
  })
  submitdetails(obj: any) {
    obj['subscription'] = '';

    this.service.postUser(obj);
    this.form.get('username')?.reset("");
    this.form.get('email')?.reset("");
    this.form.get('password')?.reset("");
    this.form.get('mobile')?.reset("");
    this.form.get('userRole')?.reset("");
    this.notifyService.showSuccess("Signup successfully!", "");
  }
  ngOnInit(): void {
  }
  get password() {
    return this.form.get('password');
  }
  get email() {
    return this.form.get('email');
  }
  get username() {
    return this.form.get('username');
  }
  get mobile() {
    return this.form.get('mobile')
  }
  get userRole() {
    return this.form.get('userRole')
  }
  showpass() {
    this.eye = !this.eye;
  }

}
