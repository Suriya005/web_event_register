import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private eventService: EventService,
    ) { }

  major:any
  userData:any
  searchData:any = ""
  dataSearch:any ={}

  registerForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl(''),
    titleName: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    birthDay: new FormControl(new Date()),
    sex: new FormControl(''),
    major: new FormControl(''),
  });
  ngOnInit(): void {
    // this.eventService.getMajor().then((res:any)=>{
    //   this.major = res
    // })
    // this.onSearch()
    this.changeSearch()
  }

  onSearch(){
    this.loginService.getUser(localStorage.getItem('token')).subscribe((res:any)=>{
      this.userData = res
    })
  }
  changeSearch(){
    this.dataSearch = {
      token: localStorage.getItem('token'),
      searchData: this.searchData
    }
    this.loginService.getUserOnChange(this.dataSearch).then((res:any)=>{
      // console.log('เปลี่ยน')
      // console.log(res)
      this.userData = res
    })
  }

  register() {
    console.log(this.registerForm.value);
    this.loginService.registerUser(this.registerForm.value).then((res:any)=>{
      console.log(res);
    })
  }

}