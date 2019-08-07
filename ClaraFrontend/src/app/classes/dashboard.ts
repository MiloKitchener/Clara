import { Chart } from './chart';

export class Dashboard {
  name: string;
  desc: string;
  charts: Chart[];
  tags: string[];

  constructor(name: string) {
    this.name = name;
    this.desc = '';
    this.charts = [];
  }
}
