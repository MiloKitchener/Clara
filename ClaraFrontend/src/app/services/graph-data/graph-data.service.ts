import { Injectable } from '@angular/core';
import { Dataset } from 'src/app/classes/dataset';

@Injectable({
  providedIn: 'root'
})

export class GraphDataService {

  // instance variables
  private datasets: Dataset[];

  constructor() {
    // query for database list to instantiate instance variables
    this.datasets = [{ title: 'Traffic_Volumes' }]
  }

  // returns a list of datasets from the database
  getDatasets() : Dataset[] {
    return this.datasets;
  }
  
  // returns a list of fields corresponding to a database parameter
  getFields(datasetTitle: string) {
    return ['SPEED_LIMIT', 'AADT'];
  }

  // returns the chart data associated with two fields
  getChartData(xField: string, yField: string) {
    return [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
    }];
  }
}
