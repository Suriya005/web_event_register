import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
  });

  // constructor
  constructor(
    private loginService: LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  // on init
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['/home']);
    }
    console.log(this.loginForm.value);
  }

  // my function
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService
        .loginUser(this.loginForm.value)
        .subscribe((res: any) => {
          localStorage.setItem('token', res.userToken.toString());
          this._router.navigate(['/home']);
        });
    }
  }
}
