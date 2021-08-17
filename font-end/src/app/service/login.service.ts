import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(registerForm: any) {
    return this.http
      .post(environment.serverUrl + `/pgusers`, registerForm)
      .toPromise();
  }

  getUser() {
    return this.http
      .get(environment.serverUrl + `/apitest`)
      .toPromise();
  }
}
