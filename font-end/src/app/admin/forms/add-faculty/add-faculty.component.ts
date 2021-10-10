import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }

  addFaculty = new FormGroup({
    locationName: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
  });

  ngOnInit(): void {

  }
  add() {
    console.log(this.addFaculty.value);
    // this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
    //   console.log(res);
    // })
  }

}
