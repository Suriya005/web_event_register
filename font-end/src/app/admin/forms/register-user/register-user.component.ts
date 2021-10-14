import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  department = [
    { name: 'สาขาบริหารธุรกิจ', value: 1},
    { name: 'สาขาบัญชี', value: 1},
    { name: 'สาขาวิทยาการคอมพิวเตอร์', value: 1},
    { name: 'สาขารัฐประศาสนศาสตร์', value: 1},
    { name: 'สาขาธุรกิจการบินและการขนส่งทางอากาศ', value: 1},
    { name: 'สาขานิเทศศาสตร์', value: 1},
  ];

  registerForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
    titleName: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    birthDay: new FormControl(new Date()),
    sex: new FormControl(''),
    department: new FormControl(''),
  });
  ngOnInit(): void {
    
  }

  register() {
    console.log(this.registerForm.value);
    console.log('test');
    // this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
    //   console.log(res);
    // })
  }

}
