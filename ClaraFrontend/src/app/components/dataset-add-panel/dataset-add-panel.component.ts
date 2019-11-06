import { Component, OnInit } from '@angular/core';
import {DatasetService} from '../../services/dataset/dataset.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dataset-add-panel',
  templateUrl: './dataset-add-panel.component.html',
  styleUrls: ['./dataset-add-panel.component.scss']
})
export class DatasetAddPanelComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(
    private datasetService: DatasetService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      url: ['', Validators.required]
    });
  }

   uploadDataset() {
    this.datasetService.createDatasetAndFields(this.uploadForm.value).then();
  }

}
