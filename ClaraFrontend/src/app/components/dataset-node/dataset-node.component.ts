import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataset-node',
  templateUrl: './dataset-node.component.html',
  styleUrls: ['./dataset-node.component.scss']
})
export class DatasetNodeComponent implements OnInit {
  title = "";
  status = "";
  description = "";

  constructor() { }

  ngOnInit() {
    this.title = "Title";
    this.status = "active";
    this.description = "lorem ipsum dolor";
  }

}
