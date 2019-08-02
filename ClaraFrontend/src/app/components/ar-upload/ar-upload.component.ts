import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArService} from '../../services/ar/ar.service';

@Component({
  selector: 'app-ar-upload',
  templateUrl: './ar-upload.component.html',
  styleUrls: ['./ar-upload.component.scss']
})

// Form made using tutorial: https://medium.com/@amcdnl/file-uploads-with-angular-reactive-forms-960fd0b34cb5
export class ArUploadComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(private fb: FormBuilder,
              private arService: ArService
  ) { }

  ngOnInit() {
     this.uploadForm = this.fb.group({
       file: [null, Validators.required],
       scale: ['', Validators.required]
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
          file
      });
    }
  }

  onSubmit() {
    this.arService.upload(this.uploadForm);
  }
}
