import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-alexa-feed',
  templateUrl: './alexa-feed.component.html',
  styleUrls: ['./alexa-feed.component.scss']
})
export class AlexaFeedComponent implements OnInit {
  private feedData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.pullFeed();
  }

  // pulls alexa feed data
  private async pullFeed() {
    // GET clara feeds
    this.feedData = await this.http.get(environment.backendIP + 'ask_clara_feed/').toPromise();
  }
}