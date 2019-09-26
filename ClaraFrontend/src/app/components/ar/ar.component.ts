import { Component, OnInit } from '@angular/core';
import {ARModel} from '../../interfaces/ar-model';
import {ArService} from '../../services/ar/ar.service';


@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss']
})
export class ArComponent implements OnInit {

  arModels = [];
  selectedARModel: ARModel;

  constructor(private arService: ArService) { }

  ngOnInit() {
    this.arService.getARModels().then( (results) => {
      this.arModels = results.items;
    });
  }

  onSelect(arModel: ARModel): void {
    this.selectedARModel = arModel;
  }
}
