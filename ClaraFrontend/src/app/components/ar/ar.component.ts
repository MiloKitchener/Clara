import { Component, OnInit } from '@angular/core';
import {ARModel} from '../../classes/ar-model';
import {ArService} from '../../services/ar/ar.service';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss']
})
export class ArComponent implements OnInit {

  arModels: ARModel[] = [];
  selectedARModel: ARModel;

  constructor(private arService: ArService) { }

  ngOnInit() {
    this.arService.getARModels().subscribe(arModels => {
      this.arModels = arModels;
    });
  }

  onSelect(arModel: ARModel): void {
    this.selectedARModel = arModel;
  }
}
