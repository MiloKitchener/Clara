export class Chart {
  name: string;
  type: string;
  labels: string[];
  data: any[];

  constructor() {
    this.name = "";
    this.type = "";
    this.labels = [];
    this.data = [];
  }
}
