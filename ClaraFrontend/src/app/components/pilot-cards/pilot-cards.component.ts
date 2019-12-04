import { Component, OnInit, Input } from '@angular/core';
import { LabServicesService } from 'src/app/services/lab-services/lab-services.service'
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-pilot-cards',
  templateUrl: './pilot-cards.component.html',
  styleUrls: ['./pilot-cards.component.scss']
})
export class PilotCardsComponent implements OnInit {

  @Input() pilot: any;

  constructor(
    private labServicesService:LabServicesService,
    private apiService:APIService
  ) { }

  counter = 0;
  percentage = 0;
  panelOpenState = false;

  ngOnInit() {
    //this.apiService.CreateObjective( {objectivePilotId: '2', content: 'This is a test objective.'} )

    for (let obj of this.pilot.objective.items) {
       if (obj.state === true) {
         this.counter++;
       }
    }
    console.log(this.counter)
    this.percentage = (this.counter / this.pilot.objective.items.length) * 100;
  }

  checkValue(event) {
    console.log(event);
    if (event.checked === true) {
      this.counter++;
    } else if (event.checked === false) {
      this.counter--;
    }
    
    this.labServicesService.updateObjective( {id:event.source.id, state: event.checked} )
    this.percentage = (this.counter / this.pilot.objective.items.length) * 100;
  }

}
