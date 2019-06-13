import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-alexa-feed',
  templateUrl: './alexa-feed.component.html',
  styleUrls: ['./alexa-feed.component.scss']
})

export class AlexaFeedComponent implements OnInit {
  feedData: any;
  statsData: any;
  imageSrc: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.pullFeed();

    this.statsData = {
      weather: "raining"
    };
    this.imageSrc = "assets/images/weather/" + this.statsData.weather + ".png";
  }

  // pulls alexa feed data
  async pullFeed() {
    // GET clara feeds
    await this.http.get(environment.backendIP + 'ask_clara_feed/').subscribe(
      res => {
        this.feedData = res;
      },
      error => console.log('Error', error)
    );
  }
}