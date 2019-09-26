import { Component, OnInit } from '@angular/core';

import { Device } from 'src/app/interfaces/device';

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
        uuid: 'Clara Mobile 1',
        deviceid: 'Soil Moisture'
      }, {
        uuid: 'Clara Hub 1',
        deviceid: 'UV'
      }
    ];
  }

}
