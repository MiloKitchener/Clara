import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-lab-services-options',
  templateUrl: './lab-services-options.component.html',
  styleUrls: ['./lab-services-options.component.scss']
})
export class LabServicesOptionsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  private objectives = [];

  addObjective() {
    this.objectives.push("test");
    console.log(`We now have ${this.objectives.length} objectives`);
    console.log(this.objectives)
  }

  ngOnInit() {
    console.log(`We now have ${this.objectives.length} objectives`);
  }

}
