import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-services',
  templateUrl: './lab-services.component.html',
  styleUrls: ['./lab-services.component.scss']
})
export class LabServicesComponent implements OnInit {

  constructor() { }

  counter = 0;
  percentage = 0;
  panelOpenState = false;

  public objectives = [];

  ngOnInit() {
  }

  checkValue(event) {
    console.log(event)

    if (event.srcElement.checked === true) {
       this.counter++
    }
    else if (event.srcElement.checked === false) {
      this.counter--
    }

    this.percentage = (this.counter / 3) * 100;
  }

}
