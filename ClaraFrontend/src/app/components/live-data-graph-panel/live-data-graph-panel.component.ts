import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import {Device} from '../../interfaces/device';

@Component({
  selector: 'app-live-data-graph-panel',
  templateUrl: './live-data-graph-panel.component.html',
  styleUrls: ['./live-data-graph-panel.component.scss']
})
export class LiveDataGraphPanelComponent implements OnInit {
  private chartData = [];
  private chartLabels = [];
  liveDataForm: FormGroup;
  devices: Device[] = [];
  private selectedField;
  private selectedDevice;
  private chart: any;
  data;

  constructor(
    private dashboardService: DashboardService,
    private formBuilder: FormBuilder,
  ) {
    this.liveDataForm = formBuilder.group({
      device: ['', Validators.required],
      field: [{value: '', disabled: !this.selectedDevice }, Validators.required],
    });
  }

  ngOnInit() {
    this.dashboardService.getLiveDevices().subscribe((result: any) => {
          this.devices = result.data.listDevices.items;
          if (this.devices) {
            this.selectedDevice = this.devices[0];
          }
      });

    // Populates initial empty charts
    this.updateLiveChart();
  }

  // Updates the data in a the live line chart
  updateLiveChart() {
    const canvas: any = document.getElementById('live-chart');
    const ctx = canvas.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [{
          data: this.chartData,
        }],
      },
      options: {
        responsive: true,
      }
    });
  }

  submit() {
    // stop here if form is invalid
    if (
      this.liveDataForm.invalid ||
      this.liveDataForm.value.fields === 'None' ||
      this.liveDataForm.value.devices === 'None'
    ) {
      alert('Please Make a Selection in all of The Fields');
      return;
    } else {
      // TODO: Submit POST request
      alert('hi');
    }
  }

  selectChange(event) {
    if (event.source.id === 'deviceSelect') {
      this.selectedField = null;
    }
    // Update fields
    const keys = Object.keys(this.selectedDevice);
    for (const key of keys) {
      // Remove unusable fields
      if (key !== 'uuid' && key !== 'deviceid' && key !== 'ts' && key !== '__typename') {
        // this.fields.push(key);
      }
    }
    if (this.selectedDevice && this.selectedField) {
      this.subscribeToDevice(this.selectedDevice.uuid);
    }
  }

  private subscribeToDevice(uuid: string) {
    // this.appsync.hc().then(client => {
    //   const observable = client.watchQuery({
    //     query: this.dashboardService.ARDUINO_MOISTURE_QUERY,
    //     variables: {uuid}
    //   });

      // observable.subscribe(({data}) => {
        // if (!data) {
        //   return console.log('getAllUsers - no data');
        // }
        // this.data = _(data.allUser).sortBy('username').reject(['id', this._user.id]).value();
        // console.log('getAllUsers - Got data', this.data);
        // this.no_user = (this.users.length === 0);
      // });

      // observable.subscribeToMore({
      //   document: this.dashboardService.ARDUINO_MOISTURE_SUB,
      //   updateQuery: (prev: UsersQuery, {subscriptionData: {data: {notifyArduinoMoisture: data }}}) => {
      //     console.log('updateQuery on convo subscription', data, prev);
      //     return this._user.ts === data.ts ? prev : addUser(prev, user);
      //   }
      // });
    // });
      // this.data = this.dataQuery.valueChanges;

      // this.dataQuery.subscribeToMore({
      // document: this.dashboardService.ARDUINO_MOISTURE_SUB,
      // variables: {uuid},
      // updateQuery: (prev, { subscriptionData }) => {
      //     if (!subscriptionData.data) {
      //       return prev;
      //     }
      //
      //     const newData = subscriptionData.data.commentAdded;
      //     console.log(newData);
      //
      //     return {
      //       ...prev,
      //       items: {
      //         data: [newData, ...prev.items.data]
      //       }
      //     };
      //   }
      // });
      // this.dashboardService.getLiveMoisture(uuid).subscribe(message => {
      //   if (message.data.notifyArduinoMoisture) {
      //     console.log(message.data.notifyArduinoMoisture);
      //   }
        // this.chartData.push(jsonMessage.y);
        // this.chartLabels.push(message.ts);
        // this.chart.update();
      // });
  }
}
