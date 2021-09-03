import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this._router.navigate(['/login']);
    }
    console.log(`Your token ${localStorage.getItem('token')}`);
  }
  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
  event_list(){
    this._router.navigate(['/event-list']);
  }
}
