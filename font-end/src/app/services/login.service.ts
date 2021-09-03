import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(body: any) {
    return this.http.post(environment.serverUrl + `/login`, body);
  }

  registerUser(registerForm: any) {
    return this.http
      .post(environment.serverUrl + `/login`, registerForm)
      .toPromise();
  }

  testUser(token: any) {
    return this.http.get(environment.serverUrl + `/users`, {
      headers: new HttpHeaders().set('Authorization', token.toString()),
    });
  }
}
