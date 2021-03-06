import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  faculty = [
    { name: 'คณะพยาบาลศาสตร์' },
    { name: 'คณะเทคนิคการแพทย์' },
    { name: 'คณะสาธารณสุขศาสตร์' },
    { name: 'คณะทันตแพทยศาสตร์' },
    { name: 'คณะนิเทศศาสตร์' },
    { name: 'คณะบริหารธุรกิจและรัฐประศาสนศาสตร์' },
    { name: 'คณะศิลปศาสตร์และวิทยาศาสตร์' },
  ];
  department = [
    { name: 'สาขาบริหารธุรกิจ' },
    { name: 'สาขาบัญชี' },
    { name: 'สาขาวิทยาการคอมพิวเตอร์' },
    { name: 'สาขารัฐประศาสนศาสตร์' },
    { name: 'สาขาธุรกิจการบินและการขนส่งทางอากาศ ' },
    { name: 'สาขานิเทศศาสตร์' },
  ];

  registerForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
    titleName: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    birthDay: new FormControl(new Date()),
    sex: new FormControl(''),
    facultyForm: new FormControl(''),
    department: new FormControl(''),
  });


  ngOnInit() {}

  // onSubmit() {
  //   this.loginService.getUser().then(user => {
  //     console.log(user);
  //   })
  // }
  // onSubmit() {
  //   console.log(this.registerForm.value);
  // }

  onSubmit() {
    this.loginService.loginUser(this.registerForm.value).then((res:any)=>{
      console.log(res);
    })
  }
}
