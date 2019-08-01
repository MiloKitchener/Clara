import { Chart } from './chart';

export class Dashboard {
  name: string;
  desc: string;
  mainChart: Chart;
  charts: Chart[];
  tags: string[];

  constructor(name: string) {
    this.name = name;
    this.desc = "";
    this.mainChart = new Chart();
    this.charts = [];
  }
}