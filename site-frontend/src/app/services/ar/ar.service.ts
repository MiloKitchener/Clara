import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ARModel} from '../../classes/ar-model';
import {Observable} from 'rxjs';
import {FileUploader} from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
export class ArService {

  public uploader: FileUploader = new FileUploader({disableMultipart: true});

  constructor(private http: HttpClient) { }

  generatePresignedURL(name: string): Observable<string> {
    return this.http.post<string>(environment.backendIP + 'ARModels/generate_presigned_url/', {name});
  }

  createARModel(arModel: ARModel) {
    return this.http.post(environment.backendIP + 'ARModels/', arModel);
  }

  getARModels(): Observable<ARModel[]> {
    return this.http.get<ARModel[]>(environment.backendIP + 'ARModels/');
  }

  updateARModels(arModel: ARModel) {
    return this.http.put(environment.backendIP + 'ARModels/' + arModel.id + '/', arModel);
  }
}
