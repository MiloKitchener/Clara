import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private http: HttpClient) { }

  // Returns a list of datasets from the database
  getDatasets() {
    return this.http.get(environment.backendIP + 'datasets/');
  }
}
