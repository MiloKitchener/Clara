import { Component, OnInit } from '@angular/core';
import {ARModel} from '../../classes/ar-model';
import {ARMODELS} from '../../mock/ar-models';
import {ArService} from '../../services/ar/ar.service';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss']
})
export class ArComponent implements OnInit {

  arModels: ARModel[] = ARMODELS;
  selectedARModel: ARModel;

  constructor(private arService: ArService) { }

  ngOnInit() {
    this.arService.getARModels().subscribe(models => {
      this.arModels = models;
    });
  }

  onSelect(arModel: ARModel): void {
    this.selectedARModel = arModel;
  }
}
