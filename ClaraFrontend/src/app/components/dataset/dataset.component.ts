import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { DatasetConfirmation } from 'src/app/interfaces/dataset-confirmation';
import {DatasetService} from '../../services/dataset/dataset.service';

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
  uploadForm: FormGroup;
  uploadFullForm: FormGroup;

  numSets: number;
  numRecentlyUpdated: number;
  numOutOfDate: number;
  numUnderReview: number;

  datasetUploadView: boolean;

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.uploadedDataset = null;
    this.uploadedDatasetName = null;
    this.uploadedDatasetFields = null;
    this.numSets = 0;
    this.numRecentlyUpdated = 0;
    this.numOutOfDate = 0;
    this.numUnderReview = 0;
    this.datasetUploadView = false;
    this.setSelectedDataset('Open Data'); // default dataset is open data

    this.searchForm = this.fb.group({
      searchValue: ['', Validators.required]
    });

    this.uploadFullForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      api_url: ['', Validators.required],
      parent_url: ['', Validators.required]
    });

    this.uploadForm = this.fb.group({
      url: ['', Validators.required]
    });
  }


  // Populates page with selected dataset information
  setSelectedDataset(name: string) {
    this.selectedDataset = name;
    this.numSets = 0;
    this.numRecentlyUpdated = 0;
    this.numOutOfDate = 0;
    this.numUnderReview = 0;

    // GET datasets
    this.datasetService.getDatasets().then((res) => {
      this.datasets = res.items;
      this.numSets = this.datasets.length;

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

  // search function used by search form
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

  // toggles the view of the dataset upload form
  toggleDatasetUpload() {
    this.datasetUploadView = this.datasetUploadView === false;
  }

  uploadDataset() {
    this.datasetService.createDatasetAndFields(this.uploadFullForm.value).then();
    // this.http.post(environment.backendIP + 'map/datasets', this.uploadForm.value).subscribe((res: string) => {
    //   const resObj = JSON.parse(res);
    //   this.uploadDataset = resObj[0]; // change for all datasets returned
    //   this.uploadedDatasetName = this.uploadedDataset.db_Name;
    //   this.uploadedDatasetFields = this.uploadedDataset.db_fields;
    // });
  }

  uploadFullDataset() {
    this.datasetService.createDataset(this.uploadFullForm.value).then();
    this.datasets.push(this.uploadFullForm.value);
  }
}
