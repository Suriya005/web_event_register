import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
  event_list(){
    this._router.navigate(['/event-list']);
  }
=======

>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
=======

>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
=======

>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
=======
>>>>>>> parent of 2c4f4e8 (u)
}
