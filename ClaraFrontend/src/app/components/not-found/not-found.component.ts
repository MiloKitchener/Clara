import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <h1>Oops!</h1>
      <h3>404 - Page Not Found</h3>
      <h5>The Page You Are Looking For Does Not Exist!</h5>
      <a routerLink="">Clara Home</a>
    </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
