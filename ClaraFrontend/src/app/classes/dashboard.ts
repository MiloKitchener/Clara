import { Chart } from './chart';

export class Dashboard {
  name: string;
  charts: Chart[];

  constructor(name: string) {
    this.name = name;
    this.charts = [];
  }
}
