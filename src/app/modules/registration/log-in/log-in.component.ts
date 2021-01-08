import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlService } from '../../../apiServices/form-control.service';
import { AuthService } from '../../../apiServices/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

 error: any;

constructor(
  private authService: AuthService,
  private router: Router,
  public formControlService: FormControlService
) { }

  ngOnInit(): void{
  }

  login(username: string, password: string): void {
   if (this.formControlService.loginForm.valid){
     console.log(username, password);
    this.authService.login(username, password).subscribe(
      _success => this.router.navigate(['']),
      error => console.log(error)
    );
  }
}

  signup(): void {
    this.router.navigate(['signup']);
  }
}
