import { Component, OnInit } from '@angular/core';

// import classes
import { Device } from 'src/app/classes/device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: Device[];

  constructor() { }

  ngOnInit() {
    this.devices = [
      {
        name: "Clara Mobile 1",
        sensors: ["Soil Moisture", "Humidity"]
      }, {
        name: "Clara Hub 1",
        sensors: ["Co2", "UV", "Temperature"]
      }
    ];
  }

}
