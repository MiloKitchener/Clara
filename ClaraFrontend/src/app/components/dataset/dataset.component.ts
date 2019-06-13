import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

import { Dataset } from 'src/app/classes/dataset';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})

export class DatasetComponent implements OnInit {

  // class variables
  selectedDataset: string;
  datasets: Dataset[];

  searchForm: FormGroup;
  uploadForm: FormGroup;

  numSets: number;
  numRecentlyUpdated: number;
  numOutOfDate: number;
  numUnderReview: number;

  datasetUploadView: boolean;

  constructor(
    private http: HttpClient,
    private datasetService: GraphDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.numSets = 0;
    this.numRecentlyUpdated = 0;
    this.numOutOfDate = 0;
    this.numUnderReview = 0;
    this.datasetUploadView = false;
    this.setSelectedDataset("Open Data"); // default dataset is open data

    this.searchForm = this.fb.group({
      searchValue: ['', Validators.required]
    });

    this.uploadForm = this.fb.group({
      url: ['', Validators.required]
    });
  }


  // populates page with selected dataset information
  setSelectedDataset(name: string) {
    this.selectedDataset = name;
    this.numSets = 0;
    this.numRecentlyUpdated = 0;
    this.numOutOfDate = 0;
    this.numUnderReview = 0;

    // GET datasets
    this.datasetService.getDatasets().subscribe((res: any[]) => {
      this.datasets = res;
      this.numSets = this.datasets.length;

      var year: string;
      for (var i = 0; i < this.datasets.length; i++) {
        year = this.datasets[i].datetime_updated.slice(0, 4)
        if (parseInt(year) > 2014) {
          this.numRecentlyUpdated++;
        }
        else {
          this.numOutOfDate++;
        }
      }
    });
  }


  // https://www.w3schools.com/howto/howto_js_filter_lists.asp

  // search function used by search form
  search() {/*
    var input = this.searchForm.get('searchValue').value;
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("datasetsList");
    var li = ul.getElementsByTagName('li');
    
    var txtValue: string;

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < li.length; i++) {
      txtValue = li[i].innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      }
      else {
        li[i].style.display = "none";
      }
    }*/
  }

  // toggles the view of the dataset upload form
  toggleDatasetUpload() {
    if (this.datasetUploadView == false) {
      this.datasetUploadView = true;
    }
    else {
      this.datasetUploadView = false;
    }
  }

  // POSTS a dataset URL to the database
  uploadDataset() {
    this.http.post(environment.backendIP + 'create/datasets', this.uploadForm.value).subscribe(() => {
      console.log("Dataset POST Successful");
    });
  }
}
