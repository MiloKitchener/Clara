import { Injectable } from '@angular/core';

import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private user: User;

  constructor() {
    // pull user from database
    this.user = new User("William McKinnon", "Smart City Developer", "assets/images/avatar.png");
  }

  // pushes profile changes to backend
  public updateProfile(user: any) {
    this.user = new User(user.name, user.title, user.imageUrl);
    alert(JSON.stringify(this.user));
  }

  // GETTERS
  public getUser() {
    return this.user;
  }

  public getName() {
    return this.user.getName();
  }

  public getTitle() {
    return this.user.getTitle();
  }

  public getPictureSrc() {
    return this.user.getPictureSrc();
  }
}
