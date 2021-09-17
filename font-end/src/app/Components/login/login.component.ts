import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userId: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
    ]),
    password: new FormControl(''),
  })

  // constructor
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  constructor(
    private loginService: LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}
=======
  constructor() {}
>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
=======
  constructor() {}
>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
=======
  constructor() {}
>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)

  // on init
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['/home']);
    }
    console.log(this.loginForm.value);

  }

  // my function
  onSubmit() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (this.loginForm.valid) {
      this.loginService
        .loginUser(this.loginForm.value)
        .subscribe((res: any) => {
          localStorage.setItem('token', res.userToken.toString());
          this._router.navigate(['/home']);
        });
    }
=======
    console.log(this.loginForm.value);
>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
=======
    console.log(this.loginForm.value);
>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
=======
    console.log(this.loginForm.value);
>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
  }

<<<<<<< HEAD
  camera(){
    this._router.navigate(['/cam']);
  }
  camera2(){
    this._router.navigate(['/cam2']);
  }
=======
 
>>>>>>> main
}
