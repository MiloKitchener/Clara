import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilot-cards',
  templateUrl: './pilot-cards.component.html',
  styleUrls: ['./pilot-cards.component.scss']
})
export class PilotCardsComponent implements OnInit {

  constructor() { }

  counter = 0;
  percentage = 0;
  panelOpenState = false;

  ngOnInit() {
  }

  checkValue(event) {
    console.log(event);

    if (event.srcElement.checked === true) {
       this.counter++;
    } else if (event.srcElement.checked === false) {
      this.counter--;
    }

    this.percentage = (this.counter / 3) * 100;
  }

}
