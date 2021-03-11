import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private session: SessionService, private route: Router){
    if (this.session.isLoggedIn()) {
      console.log(this.session.isLoggedIn())
      this.route.navigateByUrl('/trainer');
    }
  }

  ngOnInit(): void {
  }

  get username(): any{
    return this.loginForm.get('username')
  }

  public onLoginClick() {
    this.session.login(this.loginForm.get('username')?.value);
  }
}