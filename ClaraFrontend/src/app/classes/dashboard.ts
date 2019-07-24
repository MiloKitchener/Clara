import { Chart } from './chart';

export class Dashboard {
  name: string;
  mainChart: Chart;
  charts: Chart[];

  constructor(name: string) {
    this.name = name;
    this.mainChart = new Chart();
    this.charts = [];
  }
}