import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private name: string;
  private title: string;
  private pictureSrc: string;

  private postsHeadingTxt: string;

  private updateUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _profileService: ProfileService
  ) { }

  ngOnInit() {
    this.postsHeadingTxt = "You Haven't Made Any Posts Yet!"
    this.name = this._profileService.getName();
    this.title = this._profileService.getTitle();
    this.pictureSrc = this._profileService.getPictureSrc();

    this.updateUserForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  public updateProfile() {
    // stop if form is invalid
    if (this.updateUserForm.invalid) {
      return;
    }
    else {
      this._profileService.updateProfile(this.updateUserForm.value);
    }
  }
}
