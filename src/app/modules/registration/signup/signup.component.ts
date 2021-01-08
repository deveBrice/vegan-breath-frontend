import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlService } from '../../../apiServices/form-control.service';
import { AuthService } from '../../../apiServices/auth.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    public formControlService: FormControlService
  ) { }

  ngOnInit() {
  }

  submit(){
    return;
  }


  signup (username: string, email: string, password1: string, password2: string) {

    if (this.formControlService.signUpForm.valid) {
    this.authService.signup(username, email, password1, password2).subscribe(
      (response) => {
        window.alert('Welcome, you can now log in');
        this.router.navigate(['login']);
      },
      (error) => {
        console.log('erreur' , error);
        if (isNotNullOrUndefined(error.error.email)){
          window.alert(`error: ${error.error.email} try again`);
        }
        if (isNotNullOrUndefined(error.e.username)) {
          window.alert(`error: ${error.error.email} try again`);
        }
        if (isNotNullOrUndefined(error.error.global[0])){
          window.alert(error.error.global[0]);
        }
      }
    );
  }
  }

}
