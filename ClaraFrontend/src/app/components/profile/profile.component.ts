import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
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

    // user form variable
    this.updateUserForm = this.fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  // updates user profile
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
