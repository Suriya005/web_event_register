import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
test(){
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )}
}
