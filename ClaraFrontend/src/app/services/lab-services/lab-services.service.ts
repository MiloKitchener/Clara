import { Injectable } from '@angular/core';
import { APIService } from '../../API.service';

@Injectable({
  providedIn: 'root'
})
export class LabServicesService {

  constructor( private apiService: APIService ) { }

  // Get all of the pilots from AWS
  public getPilots(): Promise<any> {
    return this.apiService.ListPilots();
  }
}
