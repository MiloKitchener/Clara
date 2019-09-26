import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FileUploader} from 'ng2-file-upload';
import {APIService} from '../../API.service';


@Injectable({
  providedIn: 'root'
})
export class ArService {

  constructor(
    private http: HttpClient,
    private apiService: APIService
  ) { }

  public uploader: FileUploader = new FileUploader({disableMultipart: true});

  generatePresignedURL(name: string): Observable<string> {
    return this.http.post<string>(environment.backendIP + 'ARModels/generate_presigned_url/', {name});
  }

  createARModel(arModel): Promise<any> {
    return this.apiService.CreateArModel(arModel);
  }

  getARModels(): Promise<any> {
    return this.apiService.ListArModels();
  }

  updateARModels(arModel): Promise<any> {
    return this.apiService.UpdateArModel(arModel);
  }
}
