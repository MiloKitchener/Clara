import { Component, OnInit } from '@angular/core';

declare var $:any;

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

    if(this.status == "active") {
      document.getElementById("status").style.color = "#40f7aa";
    }
    else if(this.status == "inactive") {
      document.getElementById("status").style.color = "#f7408d";
    }
    else {
      alert("Error: Incorrect Status: " + this.status);
    }
  }

}
