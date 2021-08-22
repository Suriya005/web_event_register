import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.scss']
})
export class EventRegComponent implements OnInit {
  public model = {
    editorData: '<p>Hello, world!</p>'
};
  constructor() { }

  ngOnInit(): void {
  }

}
