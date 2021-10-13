import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  constructor() { }

  titleEventQuestion:any ="";
  eventQuestion: any = [];

  questionForm = new FormGroup({
    FquestionName: new FormControl(),
  });
  questionEditForm = new FormGroup({
    questionNum: new FormControl(),
    questionName: new FormControl(),
  });
  eventTitel = new FormGroup({
    titleEventQuestion: new FormControl()
  })

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.eventQuestion.push(this.questionForm.value.FquestionName);
    this.questionForm = new FormGroup({
      FquestionName: new FormControl(''),
    })
    console.log(this.eventQuestion);
  }
  onEdit() {
    if (-1 > this.questionEditForm.value.questionName || this.questionEditForm.value.questionName < this.eventQuestion.length + 1 ) {
      this.eventQuestion.fill(this.questionEditForm.value.questionName,Number(this.questionEditForm.value.questionNum) - 1,this.questionEditForm.value.questionNum );
    }else{
      console.log('this value is more then maximum')
    }
  }

  comfirm() {
    console.log(this.eventQuestion);
  }
}
