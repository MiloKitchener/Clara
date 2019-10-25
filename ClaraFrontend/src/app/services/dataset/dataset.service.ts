import { Injectable } from '@angular/core';
import {APIService} from '../../API.service';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private apiService: APIService) { }

  // Returns a list of datasets
  getDatasets() {
    return this.apiService.ListDatasets();
  }

  createDataset(dataset) {
    return this.apiService.CreateDataset(dataset);
  }

  createDatasetAndFields(url: string) {
    return this.apiService.CreateDatasetAndFields(url);
  }
}
