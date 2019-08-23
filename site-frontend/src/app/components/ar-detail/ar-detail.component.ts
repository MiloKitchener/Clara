import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ARModel} from '../../classes/ar-model';
import {ArService} from '../../services/ar/ar.service';

@Component({
  selector: 'app-ar-detail',
  templateUrl: './ar-detail.component.html',
  styleUrls: ['./ar-detail.component.scss']
})
export class ArDetailComponent implements OnInit {

  updateARModelForm: FormGroup;
  @Input() arModel: ARModel;

  constructor(private fb: FormBuilder, private arService: ArService) { }

  ngOnInit() {
    this.updateARModelForm = this.fb.group({
      scale: ['', Validators.required]
    });
  }

  onSave() {
    this.arModel.scale = this.updateARModelForm.get('scale').value;
    this.arService.updateARModels(this.arModel).subscribe();
  }
}
