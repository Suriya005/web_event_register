import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-major',
  templateUrl: './add-major.component.html',
  styleUrls: ['./add-major.component.scss']
})
export class AddMajorComponent implements OnInit {

  constructor() { }

  addMajor = new FormGroup({
    majorName: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
  });

  ngOnInit(): void {

  }
  add() {
    console.log(this.addMajor.value);
    // this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
    //   console.log(res);
    // })
  }

}
