// Import angular dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Import classes
import { Dashboard } from 'src/app/classes/dashboard';

// Import service
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  // class variables
  private name: string;
  private dashboard: Dashboard = new Dashboard('');
  private displayAddChartPanel: boolean;
  private screenIcon: string;
  private options = {
    responsive: true
  };

  public dashboards: Dashboard[] = [];

  // Inject the activatated route
  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.getDashboards().subscribe( data => {
      this.dashboards = data;
      // Subscribe to the parameters observable
      this.route.paramMap.subscribe(params => {
        this.name = params.get('id');
        this.dashboard = this.dashboardService.getDashboard(this.dashboards, this.name);
        for (const chart of this.dashboard.charts) {
          if (chart.type === 'scatter') {
            this.dashboardService.getData({
              field1: chart.field1,
              dataset1: chart.dataset1,
              field2: chart.field2,
              dataset2: chart.dataset2
            }).subscribe(res => {
              chart.data = res;
            });
          }
        }
      });
    });
    const mobileDashboard = new Dashboard('Mobile');
    this.dashboards.push(mobileDashboard);

    this.displayAddChartPanel = false;
    this.screenIcon = 'fullscreen';

    // hide graph panel when its closed button is pressed
    this.dashboardService.closePanel.subscribe(
      (userChartData: any) => {
        this.toggleAddChartPanel();
      }
    );
  }

  // toggles the add chart panel
  toggleAddChartPanel(): void {
    this.displayAddChartPanel = !this.displayAddChartPanel;
  }

  // sets a new chart as the primary
  setAsPrimaryChart(index: number) {
    const oldMainChart = this.dashboard.charts[0];
    this.dashboard.charts[0] = this.dashboard.charts[index];
    this.dashboard.charts.splice(index, 1);
    if (oldMainChart.name !== '') { // if dashboard had a main chart
      this.dashboard.charts.push(oldMainChart);
    }
  }

  // deletes a chart at a specified index
  deleteChart(index: number) {
    this.dashboard.charts.splice(index, 1);
  }

  // increases size of chart
  // CURRENTLY NOT WORKING
  increaseSize(index: number) {
    const chart = (document.getElementsByClassName('charts') as any as HTMLElement[])[index];
    chart.style.width = '100vw';
  }

  // decreases size of chart
  // CURRENTLY NOT WORKING
  decreaseSize(index: number) {
    const chart = (document.getElementsByClassName('charts') as any as HTMLElement[])[index];
    chart.style.width = '20vw';
  }

  // toggles chart in fullscreen
  public toggleFullScreen(index: number): void {

    // Trigger fullscreen
    if (this.screenIcon === 'fullscreen') {
      const fullscreenChart = (document.getElementsByClassName('charts') as any as HTMLElement[])[index];

      fullscreenChart.style.padding = '100px';

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
      this.screenIcon = 'fullscreen_exit';
    } else {
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
      this.screenIcon = 'fullscreen';

      // return chart to normal size
      const fullscreenChart = (document.getElementsByClassName('charts') as any as HTMLElement[])[index];
      fullscreenChart.style.padding = '20px';
    }
  }
}
