import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-services',
  templateUrl: './lab-services.component.html',
  styleUrls: ['./lab-services.component.scss']
})
export class LabServicesComponent implements OnInit {

  constructor() { }
  
  panelOpenState = false;

  public objectives = [];

  ngOnInit() {
  }

}
