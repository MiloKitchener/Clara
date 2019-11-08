import { Component, OnInit, Input } from '@angular/core';
import { LabServicesService } from 'src/app/services/lab-services/lab-services.service'

@Component({
  selector: 'app-pilot-cards',
  templateUrl: './pilot-cards.component.html',
  styleUrls: ['./pilot-cards.component.scss']
})
export class PilotCardsComponent implements OnInit {

  @Input() card: any;

  constructor(
    private labServicesService:LabServicesService
  ) { }

  counter = 0;
  percentage = 0;
  panelOpenState = false;

  ngOnInit() {

  }

  checkValue(event) {
    console.log(event);

    if (event.checked === true) {
       this.counter++;
    } else if (event.checked === false) {
      this.counter--;
    }

    this.percentage = (this.counter / 3) * 100;
  }

}
