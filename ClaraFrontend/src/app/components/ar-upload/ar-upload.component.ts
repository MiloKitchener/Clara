import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArService} from '../../services/ar/ar.service';
import {ARModel} from '../../classes/ar-model';

@Component({
  selector: 'app-ar-upload',
  templateUrl: './ar-upload.component.html',
  styleUrls: ['./ar-upload.component.scss']
})

/**
 * Form made using tutorial: https://medium.com/@amcdnl/file-uploads-with-angular-reactive-forms-960fd0b34cb5
 * File uploading learned through:
 * https://github.com/valor-software/ng2-file-upload/blob/development/demo/src/app/components/file-upload/simple-demo.html
 */
export class ArUploadComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public arService: ArService
  ) { }

  ngOnInit() {
     this.uploadForm = this.fb.group({
       scale: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.arService.uploader.queue[0] != null) {
      // Create model
      const name = this.arService.uploader.queue[0].file.name.replace(/\.[^/.]+$/, '');
      const arModel: ARModel = new ARModel(name, this.uploadForm.get('scale').value);
      this.arService.createARModel(arModel).subscribe();

      // Upload all the files to S3
      for (const item of this.arService.uploader.queue) {
        // Get presigned S3 url
        this.arService.generatePresignedURL(item.file.name, item.file.rawFile).subscribe(url => {
          // Set the upload object
          item.url = url;
          item.method = 'PUT';
          item.headers =  [{name: 'Content-Type', value: item.file.type}];
          item.withCredentials = false;
          // Upload the file
          item.upload();
        });
      }
    }
  }
}
