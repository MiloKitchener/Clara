import { Label } from "ng2-charts";
import { ChartType } from "chart.js";

export class Chart {
  name: string;
  type: ChartType;
  field1: string;
  dataset1: string;
  field2: string;
  dataset2: string;
  labels: Label[];
  data: [];

  constructor() {
    this.name = '';
    this.type = 'scatter';
    this.labels = [];
    this.data = [];
  }
}
