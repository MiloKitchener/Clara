import { Component, OnInit } from '@angular/core';
import { LabServicesService } from 'src/app/services/lab-services/lab-services.service';

@Component({
  selector: 'app-lab-services',
  templateUrl: './lab-services.component.html',
  styleUrls: ['./lab-services.component.scss']
})
export class LabServicesComponent implements OnInit {

  cards: [];
  panelOpenState = false;

  constructor(
    private labServicesService: LabServicesService
    ) { }
  
  public objectives = [];

  ngOnInit() {

    this.labServicesService.getPilots().then((results) => {
      this.cards = results.items;
    });
  }

}
