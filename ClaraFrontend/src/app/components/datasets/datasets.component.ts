import { Component, OnInit } from '@angular/core';

import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

import { Dataset } from 'src/app/classes/dataset';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})

export class DatasetsComponent implements OnInit {

  // class variables
  private datasets: Dataset[];

  private numOpen: number;
  private numAccepted: number;
  private numNotMapped: number;
  private numUnderReview: number;

  /*datasets = [
    {"title": "Traffic", "status":"active", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"title": "Rivers", "status":"inactive", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum felis vitae nunc sagittis iaculis."},
    {"title": "Roads", "status":"active", "description": "Maecenas convallis blandit mauris."},
    {"title": "Wind Speed", "status":"active", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum felis vitae nunc sagittis iaculis."},
  ]*/

  constructor(private datasetService: GraphDataService) { }

  ngOnInit() {
    this.numOpen = 96;
    this.numAccepted = 4;
    this.numNotMapped = 90;
    this.numUnderReview = 0;

    // GET datasets
    this.datasetService.getDatasets().subscribe((res : any[])=>{
      this.datasets = res;
    });
  }
}
