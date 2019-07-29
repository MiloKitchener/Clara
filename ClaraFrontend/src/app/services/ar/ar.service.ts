import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArService {

  private uploadURL: string = environment.backendIP + 'ARModels/upload_model/';

  constructor(private http: HttpClient) { }

  upload(uploadForm) {
    return this.http.post(this.uploadURL, uploadForm.values).subscribe(
      response => {
        // File upload successful
      },
      error => console.log('Error', error)
    );
  }
}
