import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // constructor
  constructor(
    private loginService: LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
  });

  // on init
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['/home']);
    }
  }

  // my function
  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginService
        .loginUser(this.loginForm.value)
        .subscribe((res: any) => {
          if (!res.errorMessage) {
            console.log(res.userToken);
            localStorage.setItem('token', res.userToken.toString());
            Swal.fire({
              icon: 'success',
              title: 'เข้าสู่ระบบสำเร็จ',
              timer: 1500,
            });
            this._router.navigate(['/home']);
          } else {
            Swal.fire({
              icon: 'error',
              title: `เข้าสู่ระบบไม่สำเร็จ`,
               text:`${res.errorMessage}`,
              timer: 2500,
            });
          }
        });
    }
  }
}
