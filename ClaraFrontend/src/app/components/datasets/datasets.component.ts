import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

import { Dataset } from 'src/app/classes/dataset';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})

export class DatasetsComponent implements OnInit {

  // class variables
  private datasets: Dataset[];

  private searchForm: any;

  private numOpen: number;
  private numRecentlyUpdated: number;
  private numOutOfDate: number;
  private numUnderReview: number;

  constructor(
    private datasetService: GraphDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.numRecentlyUpdated = 0;
    this.numOutOfDate = 0;
    this.numUnderReview = 0;

    this.searchForm = this.fb.group({
      searchValue: ['']
    });;

    // GET datasets
    this.datasetService.getDatasets().subscribe((res : any[])=>{
      this.datasets = res;
      this.numOpen = this.datasets.length;

      var year: string;
      for (var i = 0; i < this.datasets.length; i++) {
        year = this.datasets[i].datetime_updated.slice(0, 4)
        if(parseInt(year) > 2014) {
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
}
