import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { DatasetConfirmation } from 'src/app/interfaces/dataset-confirmation';
import {DatasetService} from '../../services/dataset/dataset.service';
import {MatDialog} from '@angular/material';
import {DatasetAddPanelComponent} from '../dataset-add-panel/dataset-add-panel.component';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})

export class DatasetComponent implements OnInit {

  selectedDataset: string;

  datasets: any = [];

  uploadedDataset: DatasetConfirmation;
  uploadedDatasetName: string;
  uploadedDatasetFields: any;

  searchForm: FormGroup;
  numRecentlyUpdated = 0;
  numOutOfDate = 0;
  numUnderReview = 0;

  datasetUploadView: boolean;

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.setSelectedDataset('Open Data'); // default dataset is open data

    this.searchForm = this.fb.group({
      searchValue: ['', Validators.required]
    });
  }


  // Populates page with selected dataset information
  setSelectedDataset(name: string) {
    this.selectedDataset = name;
    this.numRecentlyUpdated = 0;
    this.numOutOfDate = 0;
    this.numUnderReview = 0;

    // GET datasets
    this.datasetService.getDatasets().then((res) => {
      this.datasets = res.items;

      // let year: string;
      // for (let i = 0; i < this.datasets.length; i++) {
      //   year = this.datasets[i].datetime_updated.slice(0, 4);
      //   if (parseInt(year) > 2014) {
      //     this.numRecentlyUpdated++;
      //   } else {
      //     this.numOutOfDate++;
      //   }
      // }
    });
  }

  // Search function used by search form
  search() {
    const input = this.searchForm.get('searchValue').value;
    const filter = input.toUpperCase();
    const ul = document.getElementById('datasetsList');
    const li = ul.getElementsByTagName('li');

    let txtValue: string;
    // Loop through all list items, and hide those that don't match the search query
    for (let i = 0; i < li.length; i++) {
      txtValue = li[i].innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }

  openAddDatasetDialog() {
    const dialogRef = this.dialog.open(DatasetAddPanelComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== '') {
        this.datasetService.createDatasetAndFields(result.url).then();
      }
    });
  }
}
