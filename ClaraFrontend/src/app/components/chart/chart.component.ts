import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() public chart;
  public screenIcon = 'fullscreen';

  constructor() { }

  ngOnInit() { }

  // Toggles chart in fullscreen
  public toggleFullScreen() {

    // Trigger fullscreen
    // if (this.screenIcon === 'fullscreen') {
    //   const fullscreenChart = (document.getElementsByClassName('charts') as any as HTMLElement[])[index];
    //
    //   fullscreenChart.style.padding = '100px';
    //
    //   const docElmWithBrowsersFullScreenFunctions = fullscreenChart as HTMLElement & {
    //     mozRequestFullScreen(): Promise<void>;
    //     webkitRequestFullscreen(): Promise<void>;
    //     msRequestFullscreen(): Promise<void>;
    //   };
    //
    //   if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
    //     docElmWithBrowsersFullScreenFunctions.requestFullscreen().then();
    //   } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
    //     docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen().then();
    //   } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    //     docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen().then();
    //   } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
    //     docElmWithBrowsersFullScreenFunctions.msRequestFullscreen().then();
    //   }
    //   this.screenIcon = 'fullscreen_exit';
    // } else {
    //   const docWithBrowsersExitFunctions = document as Document & {
    //     mozCancelFullScreen(): Promise<void>;
    //     webkitExitFullscreen(): Promise<void>;
    //     msExitFullscreen(): Promise<void>;
    //   };
    //   if (docWithBrowsersExitFunctions.exitFullscreen) {
    //     docWithBrowsersExitFunctions.exitFullscreen().then();
    //   } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
    //     docWithBrowsersExitFunctions.mozCancelFullScreen().then();
    //   } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    //     docWithBrowsersExitFunctions.webkitExitFullscreen().then();
    //   } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
    //     docWithBrowsersExitFunctions.msExitFullscreen().then();
    //   }
    //   this.screenIcon = 'fullscreen';
    //
    //   // Return chart to normal size
    //   const fullscreenChart = (document.getElementsByClassName('charts') as any as HTMLElement[])[index];
    //   fullscreenChart.style.padding = '20px';
    // }
  }

  // Deletes a chart at a specified index
  deleteChart(index: number) {
    // this.dashboard.charts.splice(index, 1);
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

  // Sets a new chart as the primary
  setAsPrimaryChart(index: number) {
    // const oldMainChart = this.dashboard.charts[0];
    // this.dashboard.charts[0] = this.dashboard.charts[index];
    // this.dashboard.charts.splice(index, 1);
    // if (oldMainChart.name !== '') { // if dashboard had a main chart
    //   this.dashboard.charts.push(oldMainChart);
    // }
  }
}
