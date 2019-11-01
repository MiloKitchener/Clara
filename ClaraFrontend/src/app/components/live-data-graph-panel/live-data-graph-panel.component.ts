import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/interfaces/chart';
import {DeviceService} from '../../services/device/device.service';


@Component({
  selector: 'app-live-data-graph-panel',
  templateUrl: './live-data-graph-panel.component.html',
  styleUrls: ['./live-data-graph-panel.component.scss']
})
export class LiveDataGraphPanelComponent implements OnInit {

  public devices = [];
  public selectedField;
  public selectedDevice;
  public chart;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.chart = new Chart();
    this.chart.type = 'line';

    // GET devices
    this.deviceService.getDevices().then((res) => {
      this.devices = res.items;
    });
  }

  selectChange(event) {
    if (event.source.id === 'deviceSelect') {
      this.selectedField = null;
    }

    if (this.selectedDevice && this.selectedField) {
      this.deviceService.getIoTData(this.selectedDevice.uuid, 5000).then((res) => {
        res.items.forEach((item) => {
          if (this.chart.data.length > 30) {
            this.chart.data.shift(item[this.selectedField]);
            this.chart.labels.shift(item.ts);
          } else {
            this.chart.data.push(item[this.selectedField]);
            this.chart.labels.push(item.ts);
          }
        });
        this.deviceService.subscribeIoTData().subscribe(subscription => {
          // @ts-ignore
          const data = subscription.value.data.onCreateIoTData;
          if (this.chart.data.length > 30) {
            this.chart.data.shift(data[this.selectedField]);
            this.chart.labels.shift(data.ts);
          } else {
            this.chart.data.push(data[this.selectedField]);
            this.chart.labels.push(data.ts);
          }
        });
        this.chart.field1 = this.selectedField;
        this.chart.url1 = this.selectedDevice.uuid;
        this.chart.name = this.selectedDevice.uuid + ': ' + this.selectedField ;
        this.chart.category = 'live';
      });
    }
  }
}
