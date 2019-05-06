import { Component, OnInit } from '@angular/core';
import { DatasetNodeComponent } from '../dataset-node/dataset-node.component';

// jquery
declare var $:any;

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

  constructor() { }

  ngOnInit() {
    this.numOpen = 96;
    this.numAccepted = 4;
    this.numNotMapped = 90;
    this.numUnderReview = 0;

    // pull datasets from database
    for(var i = 0; i < 10; i++) {
      this.addDataset("Example " + i, "Active", "Lorem ipsum");
    }
  }

  addDataset(title, status, description) {

  }
}
