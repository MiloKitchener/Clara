import { Component, OnInit } from '@angular/core';
import { Dataset } from 'src/app/classes/dataset';
import { DatasetService } from '../services/dataset/dataset.service';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.page.html',
  styleUrls: ['./datasets.page.scss'],
})

export class DatasetsPage implements OnInit {

  datasets: Dataset[];

  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
    this.datasetService.getDatasets().subscribe((res: any[]) => {
      this.datasets = res;
    });
  }

  filterList(evt) {
    console.log("searching");
  }

}
