import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GraphDataService } from '../../services/graph-data/graph-data.service';
import { WebsocketService } from '../../services/websocket/websocket.service';
import { Dataset } from '../../classes/dataset';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Device} from '../../classes/device';

@Component({
  selector: 'app-live-data-graph-panel',
  templateUrl: './live-data-graph-panel.component.html',
  styleUrls: ['./live-data-graph-panel.component.scss']
})
export class LiveDataGraphPanelComponent implements OnInit {
  private chartData = [];
  private chartLabels = [];
  liveDataForm: FormGroup;
  datasets = [];
  selectedDataset: Dataset;
  fields = [];
  private selectedField;
  devices: Device[] = [];
  private selectedDevice;
  ioConnection: any;
  private chart: any;

  constructor(
    private graphDataService: GraphDataService,
    private formBuilder: FormBuilder,
    private socketService: WebsocketService,
    private apollo: Apollo
  ) {
    this.liveDataForm = formBuilder.group({
      datasets: ['None', Validators.required],
      fields: ['None', Validators.required],
      devices: ['None', Validators.required],
    });
  }

  ngOnInit() {
    // Get all the live datasets
    this.graphDataService.getLiveDatasets().subscribe((res) => {
      res.forEach((dataset) => {
        this.datasets.push(dataset);
      });
    });

    this.apollo.watchQuery({
        query: gql`
          {
            listDevices {
              items {
                uuid,
                deviceid
                ts
                ... on ArduinoMoisture {
                  battery
                  moisture
                  uptime
                }
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
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
      this.liveDataForm.value.datasets === 'None' ||
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

  onFieldChange(field) {
    // empty previous chart values
    this.chartLabels = [];
    this.chartData = [];
    this.updateLiveChart();

    this.selectedField = field;
    if (this.liveDataForm.controls.fields.value !== '' && this.liveDataForm.controls.devices.value !== '') {
      this.initIoConnection().then(() => {
        console.log('Connected to and configured websocket');
      });
    }
  }

  onDeviceChange(device) {
    // empty previous chart values
    this.chartLabels = [];
    this.chartData = [];
    this.updateLiveChart();

    this.selectedDevice = this.liveDataForm.get('devices').value;

    // Update fields
    this.fields.push(this.selectedDevice.moisture);
    // this.fields = [];
    // for (const key of device) {
    //   this.fields.push(key);
    // }
    if (this.liveDataForm.controls.fields.value !== 'None' && this.liveDataForm.controls.devices.value !== 'None') {
      this.initIoConnection().then(() => {
        console.log('Connected to and configured websocket');
      });
    }
  }

  private async initIoConnection() {
    if (this.socketService.isOpen()) {
      await this.socketService.close();
    }
    await this.socketService.initSocket(this.selectedDataset.api_url, JSON.stringify(this.liveDataForm.value));

    this.ioConnection = await this.socketService.onMessage()
      .subscribe((message) => {
        console.log(message);
        const jsonMessage = JSON.parse(message);
        this.chartData.push(jsonMessage.y);
        this.chartLabels.push(jsonMessage.x);
        this.chart.update();
      });
  }
}
