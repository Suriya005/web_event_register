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

  // constructor
  constructor(private loginService: LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {}



  loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
  });

  

  // on init
  ngOnInit() {
    console.log(this.loginForm.value);
    
  }

  // my function
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService
        .loginUser(this.loginForm.value)
        .subscribe((res:any) => {
          console.log(res.userToken);
          localStorage.setItem('token', res.userToken.toString());
          this._router.navigate(['/test']);
        });
    }
  }
}
