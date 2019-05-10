import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService) {
  }

  signUp(signupData) {
    this.http.post<any>('http://localhost:8000/signup/', signupData)
      .subscribe(
        (res) => {
          console.log(res);
        },
        err => console.log(err)
      )};
}
