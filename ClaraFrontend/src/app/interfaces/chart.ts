import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

export class Chart {
  name: string;
  type: ChartType;
  field1: string;
  url1: string;
  field2: string;
  url2: string;
  labels: Label[];
  data?: [];
  category: string;

  // constructor can act as empty constructor or copy constructor
  constructor(chart?: Chart) {
    this.name = chart && chart.name || '';
    this.type = chart && chart.type || 'scatter';
    this.labels = chart && chart.labels || [];
    this.data = chart && chart.data || [];
  }
}
