import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-reg-list',
  templateUrl: './event-reg-list.component.html',
  styleUrls: ['./event-reg-list.component.scss']
})
export class EventRegListComponent implements OnInit {

  constructor(private eventService: EventService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {}
  eventList: any;
  ngOnInit(): void {
    this.eventService.getEventList().then((result: any) => {
      this.eventList = result;
      console.log(result);
    });
   
  }

  testSubmit() {
    // localStorage.setItem('event_detail',{eventName:'wd'})
    this._router.navigate(['/home']);
    console.log('testSubmit');
  }
}
