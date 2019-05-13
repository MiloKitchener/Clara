import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})

export class DatasetsComponent implements OnInit {

  // class variables
  numOpen = 0;
  numAccepted = 0;
  numNotMapped = 0;
  numUnderReview = 0;

  datasets = [
    {"title": "Traffic", "status":"active", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {"title": "Rivers", "status":"inactive", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum felis vitae nunc sagittis iaculis."},
    {"title": "Roads", "status":"active", "description": "Maecenas convallis blandit mauris."},
    {"title": "Wind Speed", "status":"active", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum felis vitae nunc sagittis iaculis."},
  ]

  constructor() { }

  ngOnInit() {
    this.numOpen = 96;
    this.numAccepted = 4;
    this.numNotMapped = 90;
    this.numUnderReview = 0;
  }
}
