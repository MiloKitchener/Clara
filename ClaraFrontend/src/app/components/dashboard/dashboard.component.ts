// import angular dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import classes
import { Dashboard } from 'src/app/classes/dashboard';

// import service
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  // class variables
  name: string;
  dashboard: Dashboard;
  displayAddChartPanel: boolean;
  screenIcon: string;

  // inject the activatated route
  constructor(
    private route: ActivatedRoute,
    public _dashboardService: DashboardService,
    private _graphDataService: GraphDataService
  ) { }

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.name = params.get('id');
      this.dashboard = this._dashboardService.getDashboard(this.name);
    });
    this.displayAddChartPanel = false;
    this.screenIcon = "fullscreen";

    // hide graph panel when its closed button is pressed
    this._graphDataService.closePanel.subscribe(
      (userChartData: any) => {
        this.toggleAddChartPanel();
      }
    );
  }

  toggleAddChartPanel(): void {
    if(this.displayAddChartPanel) {
      this.displayAddChartPanel = false;
    }
    else {
      this.displayAddChartPanel = true;
    }
  }

  setAsPrimaryChart(index: number) {
    var oldMainChart = this.dashboard.mainChart;
    this.dashboard.mainChart = this.dashboard.charts[index];
    this.dashboard.charts.splice(index, 1);
    if(oldMainChart.name != "") { // if dashboard had a main chart
      this.dashboard.charts.push(oldMainChart); 
    }
  }

  // deletes a chart at a specified index
  deleteChart(index: number) {
    this.dashboard.charts.splice(index, 1);
  }

  increaseSize(index: number) {
    var chart = (<HTMLElement[]><any>document.getElementsByClassName("charts"))[index];
    chart.style.width = "100vw";
  }

  decreaseSize(index: number) {
    var chart = (<HTMLElement[]><any>document.getElementsByClassName("charts"))[index];
    chart.style.width = "20vw";
  }

  // toggles chart in fullscreen
  public toggleFullScreen(index: number): void {

    // Trigger fullscreen
    if(this.screenIcon == "fullscreen") {
      var fullscreenChart = (<HTMLElement[]><any>document.getElementsByClassName("charts"))[index];

      fullscreenChart.style.padding = "100px";

      const docElmWithBrowsersFullScreenFunctions = fullscreenChart as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
    
      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
        docElmWithBrowsersFullScreenFunctions.requestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
      } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
      }
      this.screenIcon = "fullscreen_exit";
    }

    // close fullscreen
    else {
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
        docWithBrowsersExitFunctions.msExitFullscreen();
      }
      this.screenIcon = "fullscreen"

      // return chart to normal size
      var fullscreenChart = (<HTMLElement[]><any>document.getElementsByClassName("charts"))[index];
      fullscreenChart.style.padding = "20px";
    }
  }
}
