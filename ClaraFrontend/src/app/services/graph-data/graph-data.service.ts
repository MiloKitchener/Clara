import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class GraphDataService {
  // class variables
  private datasets: any;
  private userChartData = [];
  public userDataUpdate = new EventEmitter();
  public closePanel = new EventEmitter();

  constructor(private http: HttpClient) {
    // GET datasets
    this.datasets = this.http.get(environment.backendIP + 'datasets/');
  }

  // Returns a list of datasets from the database
  getDatasets() {
    return this.datasets;
  }

  getLiveDatasets() {
    return this.http.get<any>(environment.backendIP + 'datasets/?type=live');
  }

  // Returns a list of fields corresponding to a database parameter
  getFields(id: string) {
    return this.http.get(environment.backendIP + 'datasets/' + id + '/field_names/');
  }

  getLiveFields(url: string) {
    return this.http.get(url + 'matrix_info/get_fields/');
  }

  getLiveDevices(url: string) {
    return this.http.get(url + 'devices/');
  }

  // Returns the chart data associated with two fields
  getChartData(params: any) {
    return this.http.post<[]>(environment.backendIP + 'graphs/request_graph/', params);
  }

  // emits message to hide graph panel
  closeGraphPanel() {
    this.closePanel.emit();
  }
}
