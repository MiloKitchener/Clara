import {Field} from './field';

export interface Dataset {
  id: string;
  name: string;
  desc: string;
  api_url: string;
  parent_url: string;
  fields?: Field[];
  datetime_updated?: string;
}
