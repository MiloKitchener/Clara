import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  signUp(username: string, email: string, password1: string, password2: string){
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password1', password1);
    formData.append('password2', password2);

    this.http.post('http://localhost:8000/signup/', formData)
      .subscribe(
          (res) => {
            console.log(res);
            },
          err => console.log(err)
      );
  }
}
