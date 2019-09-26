import { Injectable } from '@angular/core';

import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private user: User;

  constructor() {
    // pull user from database
    this.user = {
      name: "William McKinnon",
      title: "Smart City Developer",
      pictureSrc: "assets/images/avatar.png"
    };
  }

  // pushes profile changes to backend
  updateProfile() {
  }

  // GETTERS
  public getUser() {
    return this.user;
  }

  public getName() {
    return this.user.name;
  }

  public getTitle() {
    return this.user.title;
  }

  public getPictureSrc() {
    return this.user.pictureSrc;
  }
}
