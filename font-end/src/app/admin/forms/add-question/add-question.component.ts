import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  constructor() { }

  testArray: Array<number> = [1,2,3,4,5]
  questionNum:any
  questionForm = new FormGroup({
    testArray1: new FormArray([

    ])
  })


  ngOnInit(): void {

    
  }

  onSubmit(){
    console.log(this.questionForm.value)
  }

}
