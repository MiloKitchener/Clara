import { Injectable } from '@angular/core';
import {APIService, OnCreateIoTDataSubscription} from '../../API.service';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private apiService: APIService) { }

  // Returns a list of devices
  getDevices() {
    return this.apiService.ListIoTDevices();
  }

  // Returns a list of IoT data for the given uuid
  getIoTData(uuid: string, limit?: number) {
    return this.apiService.ListIoTDatas(uuid, null, null, limit);
  }

  subscribeIoTData() {
    return this.apiService.OnCreateIoTDataListener;
  }
}
