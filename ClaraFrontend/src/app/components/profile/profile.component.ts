import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ProfileService } from 'src/app/services/profile/profile.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  user: User

  postsHeadingTxt: string;

  updateUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _profileService: ProfileService
  ) { }

  ngOnInit() {
    this.postsHeadingTxt = "You Haven't Made Any Posts Yet!"
    this.user = this._profileService.getUser();

    this.updateUserForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  updateProfile() {
    // stop if form is invalid
    if (this.updateUserForm.invalid) {
      return;
    }
    else {
      this._profileService.updateProfile();
    }
  }
}
