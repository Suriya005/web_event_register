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
  constructor() {}

  // on init
  ngOnInit() {
    console.log(this.loginForm.value);
  }

  // my function
  onSubmit() {
    console.log(this.loginForm.value);
  }

 
}
