import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ARModel} from '../../classes/ar-model';

@Component({
  selector: 'app-ar-detail',
  templateUrl: './ar-detail.component.html',
  styleUrls: ['./ar-detail.component.scss']
})
export class ArDetailComponent implements OnInit {

  updateARModelForm: FormGroup;
  @Input() arModel: ARModel;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.updateARModelForm = this.fb.group({
      name: ['', Validators.required],
      scale: ['', Validators.required]
    });
  }

    onSubmit() {
    // TODO: Submit form
  }
}
