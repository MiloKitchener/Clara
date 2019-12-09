/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateIoTDeviceInput = {
  id?: string | null;
  uuid: string;
  type: string;
  fields: Array<string | null>;
};

export type UpdateIoTDeviceInput = {
  id: string;
  uuid?: string | null;
  type?: string | null;
  fields?: Array<string | null> | null;
};

export type DeleteIoTDeviceInput = {
  id?: string | null;
};

export type UpdateIoTDataInput = {
  uuid: string;
  ts: number;
  type?: string | null;
  battery?: number | null;
  moisture?: number | null;
  CO2?: number | null;
  pH?: number | null;
  conductivity?: number | null;
  solids?: number | null;
  salinity?: number | null;
  s_gravity?: number | null;
  uptime?: Array<number | null> | null;
  total?: number | null;
  count?: number | null;
  direction?: string | null;
  down?: number | null;
  up?: number | null;
};

export type DeleteIoTDataInput = {
  uuid: string;
  ts: number;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  content: string;
  votes: number;
  owner?: string | null;
  tags?: string | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  votes?: number | null;
  owner?: string | null;
  tags?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  owner?: string | null;
  content: string;
  commentPostId: string;
};

export type UpdateCommentInput = {
  id: string;
  owner?: string | null;
  content?: string | null;
  commentPostId?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type CreateDashboardInput = {
  id?: string | null;
  name?: string | null;
  owner?: string | null;
  desc?: string | null;
  tags: Array<string | null>;
};

export type UpdateDashboardInput = {
  id: string;
  name?: string | null;
  owner?: string | null;
  desc?: string | null;
  tags?: Array<string | null> | null;
};

export type DeleteDashboardInput = {
  id?: string | null;
};

export type CreateChartInput = {
  id?: string | null;
  name?: string | null;
  type?: string | null;
  category?: string | null;
  dataset1?: string | null;
  field1?: string | null;
  dataset2?: string | null;
  field2?: string | null;
  chartDashboardId?: string | null;
};

export type UpdateChartInput = {
  id: string;
  name?: string | null;
  type?: string | null;
  category?: string | null;
  dataset1?: string | null;
  field1?: string | null;
  dataset2?: string | null;
  field2?: string | null;
  chartDashboardId?: string | null;
};

export type DeleteChartInput = {
  id?: string | null;
};

export type UpdateDatasetInput = {
  id: string;
  name?: string | null;
  desc?: string | null;
  api_url?: string | null;
  parent_url?: string | null;
  type?: string | null;
};

export type DeleteDatasetInput = {
  id?: string | null;
};

export type UpdateFieldInput = {
  id: string;
  name?: string | null;
  normalized_name?: string | null;
  alias?: string | null;
  type?: string | null;
  fieldDatasetId?: string | null;
};

export type DeleteFieldInput = {
  id?: string | null;
};

export type CreatePilotInput = {
  id?: string | null;
  name: string;
  description: string;
  budget?: number | null;
  stakeholders?: Array<string | null> | null;
  start?: string | null;
  end?: string | null;
  contact?: string | null;
};

export type UpdatePilotInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  budget?: number | null;
  stakeholders?: Array<string | null> | null;
  start?: string | null;
  end?: string | null;
  contact?: string | null;
};

export type DeletePilotInput = {
  id?: string | null;
};

export type CreateObjectiveInput = {
  id?: string | null;
  content: string;
  state: boolean;
  objectivePilotId: string;
};

export type UpdateObjectiveInput = {
  id: string;
  content?: string | null;
  state?: boolean | null;
  objectivePilotId?: string | null;
};

export type DeleteObjectiveInput = {
  id?: string | null;
};

export type CreateIoTDataInput = {
  uuid: string;
  ts: number;
  type: string;
  battery?: number | null;
  moisture?: number | null;
  CO2?: number | null;
  pH?: number | null;
  conductivity?: number | null;
  solids?: number | null;
  salinity?: number | null;
  s_gravity?: number | null;
  uptime?: Array<number | null> | null;
  total?: number | null;
  count?: number | null;
  direction?: string | null;
  down?: number | null;
  up?: number | null;
};

export type CreateDatasetInput = {
  id?: string | null;
  name?: string | null;
  desc?: string | null;
  api_url?: string | null;
  parent_url?: string | null;
  type?: string | null;
};

export type CreateFieldInput = {
  id?: string | null;
  name?: string | null;
  normalized_name?: string | null;
  alias?: string | null;
  type?: string | null;
  fieldDatasetId?: string | null;
};

export type ModelIoTDeviceFilterInput = {
  id?: ModelIDFilterInput | null;
  uuid?: ModelStringFilterInput | null;
  type?: ModelStringFilterInput | null;
  fields?: ModelStringFilterInput | null;
  and?: Array<ModelIoTDeviceFilterInput | null> | null;
  or?: Array<ModelIoTDeviceFilterInput | null> | null;
  not?: ModelIoTDeviceFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIntKeyConditionInput = {
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIoTDataFilterInput = {
  uuid?: ModelIDFilterInput | null;
  ts?: ModelIntFilterInput | null;
  type?: ModelStringFilterInput | null;
  battery?: ModelIntFilterInput | null;
  moisture?: ModelIntFilterInput | null;
  CO2?: ModelIntFilterInput | null;
  pH?: ModelFloatFilterInput | null;
  conductivity?: ModelFloatFilterInput | null;
  solids?: ModelIntFilterInput | null;
  salinity?: ModelFloatFilterInput | null;
  s_gravity?: ModelFloatFilterInput | null;
  uptime?: ModelIntFilterInput | null;
  total?: ModelIntFilterInput | null;
  count?: ModelIntFilterInput | null;
  direction?: ModelStringFilterInput | null;
  down?: ModelIntFilterInput | null;
  up?: ModelIntFilterInput | null;
  and?: Array<ModelIoTDataFilterInput | null> | null;
  or?: Array<ModelIoTDataFilterInput | null> | null;
  not?: ModelIoTDataFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  votes?: ModelIntFilterInput | null;
  owner?: ModelStringFilterInput | null;
  tags?: ModelStringFilterInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null;
  owner?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelDashboardFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  owner?: ModelStringFilterInput | null;
  desc?: ModelStringFilterInput | null;
  tags?: ModelStringFilterInput | null;
  and?: Array<ModelDashboardFilterInput | null> | null;
  or?: Array<ModelDashboardFilterInput | null> | null;
  not?: ModelDashboardFilterInput | null;
};

export type ModelChartFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  type?: ModelStringFilterInput | null;
  category?: ModelStringFilterInput | null;
  dataset1?: ModelStringFilterInput | null;
  field1?: ModelStringFilterInput | null;
  dataset2?: ModelStringFilterInput | null;
  field2?: ModelStringFilterInput | null;
  and?: Array<ModelChartFilterInput | null> | null;
  or?: Array<ModelChartFilterInput | null> | null;
  not?: ModelChartFilterInput | null;
};

export type ModelDatasetFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  desc?: ModelStringFilterInput | null;
  api_url?: ModelStringFilterInput | null;
  parent_url?: ModelStringFilterInput | null;
  type?: ModelStringFilterInput | null;
  and?: Array<ModelDatasetFilterInput | null> | null;
  or?: Array<ModelDatasetFilterInput | null> | null;
  not?: ModelDatasetFilterInput | null;
};

export type ModelFieldFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  normalized_name?: ModelStringFilterInput | null;
  alias?: ModelStringFilterInput | null;
  type?: ModelStringFilterInput | null;
  and?: Array<ModelFieldFilterInput | null> | null;
  or?: Array<ModelFieldFilterInput | null> | null;
  not?: ModelFieldFilterInput | null;
};

export type ModelPilotFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  budget?: ModelIntFilterInput | null;
  stakeholders?: ModelStringFilterInput | null;
  start?: ModelStringFilterInput | null;
  end?: ModelStringFilterInput | null;
  contact?: ModelStringFilterInput | null;
  and?: Array<ModelPilotFilterInput | null> | null;
  or?: Array<ModelPilotFilterInput | null> | null;
  not?: ModelPilotFilterInput | null;
};

export type ModelObjectiveFilterInput = {
  id?: ModelIDFilterInput | null;
  content?: ModelStringFilterInput | null;
  state?: ModelBooleanFilterInput | null;
  and?: Array<ModelObjectiveFilterInput | null> | null;
  or?: Array<ModelObjectiveFilterInput | null> | null;
  not?: ModelObjectiveFilterInput | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateIoTDeviceMutation = {
  __typename: "IoTDevice";
  id: string;
  uuid: string;
  type: string;
  fields: Array<string | null>;
};

export type UpdateIoTDeviceMutation = {
  __typename: "IoTDevice";
  id: string;
  uuid: string;
  type: string;
  fields: Array<string | null>;
};

export type DeleteIoTDeviceMutation = {
  __typename: "IoTDevice";
  id: string;
  uuid: string;
  type: string;
  fields: Array<string | null>;
};

export type UpdateIoTDataMutation = {
  __typename: "IoTData";
  uuid: string;
  ts: number;
  type: string;
  battery: number | null;
  moisture: number | null;
  CO2: number | null;
  pH: number | null;
  conductivity: number | null;
  solids: number | null;
  salinity: number | null;
  s_gravity: number | null;
  uptime: Array<number | null> | null;
  total: number | null;
  count: number | null;
  direction: string | null;
  down: number | null;
  up: number | null;
};

export type DeleteIoTDataMutation = {
  __typename: "IoTData";
  uuid: string;
  ts: number;
  type: string;
  battery: number | null;
  moisture: number | null;
  CO2: number | null;
  pH: number | null;
  conductivity: number | null;
  solids: number | null;
  salinity: number | null;
  s_gravity: number | null;
  uptime: Array<number | null> | null;
  total: number | null;
  count: number | null;
  direction: string | null;
  down: number | null;
  up: number | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  votes: number;
  owner: string | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      owner: string | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        content: string;
        votes: number;
        owner: string | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
        tags: string | null;
      };
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: string | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  votes: number;
  owner: string | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      owner: string | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        content: string;
        votes: number;
        owner: string | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
        tags: string | null;
      };
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: string | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  votes: number;
  owner: string | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      owner: string | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        content: string;
        votes: number;
        owner: string | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
        tags: string | null;
      };
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: string | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  owner: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    votes: number;
    owner: string | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        owner: string | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          content: string;
          votes: number;
          owner: string | null;
          tags: string | null;
        };
        content: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: string | null;
  };
  content: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  owner: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    votes: number;
    owner: string | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        owner: string | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          content: string;
          votes: number;
          owner: string | null;
          tags: string | null;
        };
        content: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: string | null;
  };
  content: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  owner: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    votes: number;
    owner: string | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        owner: string | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          content: string;
          votes: number;
          owner: string | null;
          tags: string | null;
        };
        content: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: string | null;
  };
  content: string;
};

export type CreateDashboardMutation = {
  __typename: "Dashboard";
  id: string;
  name: string | null;
  owner: string | null;
  desc: string | null;
  charts: {
    __typename: "ModelChartConnection";
    items: Array<{
      __typename: "Chart";
      id: string;
      name: string | null;
      type: string | null;
      category: string | null;
      dataset1: string | null;
      field1: string | null;
      dataset2: string | null;
      field2: string | null;
      dashboard: {
        __typename: "Dashboard";
        id: string;
        name: string | null;
        owner: string | null;
        desc: string | null;
        charts: {
          __typename: "ModelChartConnection";
          nextToken: string | null;
        } | null;
        tags: Array<string | null>;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: Array<string | null>;
};

export type UpdateDashboardMutation = {
  __typename: "Dashboard";
  id: string;
  name: string | null;
  owner: string | null;
  desc: string | null;
  charts: {
    __typename: "ModelChartConnection";
    items: Array<{
      __typename: "Chart";
      id: string;
      name: string | null;
      type: string | null;
      category: string | null;
      dataset1: string | null;
      field1: string | null;
      dataset2: string | null;
      field2: string | null;
      dashboard: {
        __typename: "Dashboard";
        id: string;
        name: string | null;
        owner: string | null;
        desc: string | null;
        charts: {
          __typename: "ModelChartConnection";
          nextToken: string | null;
        } | null;
        tags: Array<string | null>;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: Array<string | null>;
};

export type DeleteDashboardMutation = {
  __typename: "Dashboard";
  id: string;
  name: string | null;
  owner: string | null;
  desc: string | null;
  charts: {
    __typename: "ModelChartConnection";
    items: Array<{
      __typename: "Chart";
      id: string;
      name: string | null;
      type: string | null;
      category: string | null;
      dataset1: string | null;
      field1: string | null;
      dataset2: string | null;
      field2: string | null;
      dashboard: {
        __typename: "Dashboard";
        id: string;
        name: string | null;
        owner: string | null;
        desc: string | null;
        charts: {
          __typename: "ModelChartConnection";
          nextToken: string | null;
        } | null;
        tags: Array<string | null>;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: Array<string | null>;
};

export type CreateChartMutation = {
  __typename: "Chart";
  id: string;
  name: string | null;
  type: string | null;
  category: string | null;
  dataset1: string | null;
  field1: string | null;
  dataset2: string | null;
  field2: string | null;
  dashboard: {
    __typename: "Dashboard";
    id: string;
    name: string | null;
    owner: string | null;
    desc: string | null;
    charts: {
      __typename: "ModelChartConnection";
      items: Array<{
        __typename: "Chart";
        id: string;
        name: string | null;
        type: string | null;
        category: string | null;
        dataset1: string | null;
        field1: string | null;
        dataset2: string | null;
        field2: string | null;
        dashboard: {
          __typename: "Dashboard";
          id: string;
          name: string | null;
          owner: string | null;
          desc: string | null;
          tags: Array<string | null>;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: Array<string | null>;
  } | null;
};

export type UpdateChartMutation = {
  __typename: "Chart";
  id: string;
  name: string | null;
  type: string | null;
  category: string | null;
  dataset1: string | null;
  field1: string | null;
  dataset2: string | null;
  field2: string | null;
  dashboard: {
    __typename: "Dashboard";
    id: string;
    name: string | null;
    owner: string | null;
    desc: string | null;
    charts: {
      __typename: "ModelChartConnection";
      items: Array<{
        __typename: "Chart";
        id: string;
        name: string | null;
        type: string | null;
        category: string | null;
        dataset1: string | null;
        field1: string | null;
        dataset2: string | null;
        field2: string | null;
        dashboard: {
          __typename: "Dashboard";
          id: string;
          name: string | null;
          owner: string | null;
          desc: string | null;
          tags: Array<string | null>;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: Array<string | null>;
  } | null;
};

export type DeleteChartMutation = {
  __typename: "Chart";
  id: string;
  name: string | null;
  type: string | null;
  category: string | null;
  dataset1: string | null;
  field1: string | null;
  dataset2: string | null;
  field2: string | null;
  dashboard: {
    __typename: "Dashboard";
    id: string;
    name: string | null;
    owner: string | null;
    desc: string | null;
    charts: {
      __typename: "ModelChartConnection";
      items: Array<{
        __typename: "Chart";
        id: string;
        name: string | null;
        type: string | null;
        category: string | null;
        dataset1: string | null;
        field1: string | null;
        dataset2: string | null;
        field2: string | null;
        dashboard: {
          __typename: "Dashboard";
          id: string;
          name: string | null;
          owner: string | null;
          desc: string | null;
          tags: Array<string | null>;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: Array<string | null>;
  } | null;
};

export type UpdateDatasetMutation = {
  __typename: "Dataset";
  id: string;
  name: string | null;
  desc: string | null;
  api_url: string | null;
  parent_url: string | null;
  type: string | null;
  fields: {
    __typename: "ModelFieldConnection";
    items: Array<{
      __typename: "Field";
      id: string;
      name: string | null;
      normalized_name: string | null;
      alias: string | null;
      type: string | null;
      dataset: {
        __typename: "Dataset";
        id: string;
        name: string | null;
        desc: string | null;
        api_url: string | null;
        parent_url: string | null;
        type: string | null;
        fields: {
          __typename: "ModelFieldConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteDatasetMutation = {
  __typename: "Dataset";
  id: string;
  name: string | null;
  desc: string | null;
  api_url: string | null;
  parent_url: string | null;
  type: string | null;
  fields: {
    __typename: "ModelFieldConnection";
    items: Array<{
      __typename: "Field";
      id: string;
      name: string | null;
      normalized_name: string | null;
      alias: string | null;
      type: string | null;
      dataset: {
        __typename: "Dataset";
        id: string;
        name: string | null;
        desc: string | null;
        api_url: string | null;
        parent_url: string | null;
        type: string | null;
        fields: {
          __typename: "ModelFieldConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateFieldMutation = {
  __typename: "Field";
  id: string;
  name: string | null;
  normalized_name: string | null;
  alias: string | null;
  type: string | null;
  dataset: {
    __typename: "Dataset";
    id: string;
    name: string | null;
    desc: string | null;
    api_url: string | null;
    parent_url: string | null;
    type: string | null;
    fields: {
      __typename: "ModelFieldConnection";
      items: Array<{
        __typename: "Field";
        id: string;
        name: string | null;
        normalized_name: string | null;
        alias: string | null;
        type: string | null;
        dataset: {
          __typename: "Dataset";
          id: string;
          name: string | null;
          desc: string | null;
          api_url: string | null;
          parent_url: string | null;
          type: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteFieldMutation = {
  __typename: "Field";
  id: string;
  name: string | null;
  normalized_name: string | null;
  alias: string | null;
  type: string | null;
  dataset: {
    __typename: "Dataset";
    id: string;
    name: string | null;
    desc: string | null;
    api_url: string | null;
    parent_url: string | null;
    type: string | null;
    fields: {
      __typename: "ModelFieldConnection";
      items: Array<{
        __typename: "Field";
        id: string;
        name: string | null;
        normalized_name: string | null;
        alias: string | null;
        type: string | null;
        dataset: {
          __typename: "Dataset";
          id: string;
          name: string | null;
          desc: string | null;
          api_url: string | null;
          parent_url: string | null;
          type: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreatePilotMutation = {
  __typename: "Pilot";
  id: string;
  name: string;
  description: string;
  objective: {
    __typename: "ModelObjectiveConnection";
    items: Array<{
      __typename: "Objective";
      id: string;
      pilot: {
        __typename: "Pilot";
        id: string;
        name: string;
        description: string;
        objective: {
          __typename: "ModelObjectiveConnection";
          nextToken: string | null;
        } | null;
        budget: number | null;
        stakeholders: Array<string | null> | null;
        start: string | null;
        end: string | null;
        contact: string | null;
      };
      content: string;
      state: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
  budget: number | null;
  stakeholders: Array<string | null> | null;
  start: string | null;
  end: string | null;
  contact: string | null;
};

export type UpdatePilotMutation = {
  __typename: "Pilot";
  id: string;
  name: string;
  description: string;
  objective: {
    __typename: "ModelObjectiveConnection";
    items: Array<{
      __typename: "Objective";
      id: string;
      pilot: {
        __typename: "Pilot";
        id: string;
        name: string;
        description: string;
        objective: {
          __typename: "ModelObjectiveConnection";
          nextToken: string | null;
        } | null;
        budget: number | null;
        stakeholders: Array<string | null> | null;
        start: string | null;
        end: string | null;
        contact: string | null;
      };
      content: string;
      state: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
  budget: number | null;
  stakeholders: Array<string | null> | null;
  start: string | null;
  end: string | null;
  contact: string | null;
};

export type DeletePilotMutation = {
  __typename: "Pilot";
  id: string;
  name: string;
  description: string;
  objective: {
    __typename: "ModelObjectiveConnection";
    items: Array<{
      __typename: "Objective";
      id: string;
      pilot: {
        __typename: "Pilot";
        id: string;
        name: string;
        description: string;
        objective: {
          __typename: "ModelObjectiveConnection";
          nextToken: string | null;
        } | null;
        budget: number | null;
        stakeholders: Array<string | null> | null;
        start: string | null;
        end: string | null;
        contact: string | null;
      };
      content: string;
      state: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
  budget: number | null;
  stakeholders: Array<string | null> | null;
  start: string | null;
  end: string | null;
  contact: string | null;
};

export type CreateObjectiveMutation = {
  __typename: "Objective";
  id: string;
  pilot: {
    __typename: "Pilot";
    id: string;
    name: string;
    description: string;
    objective: {
      __typename: "ModelObjectiveConnection";
      items: Array<{
        __typename: "Objective";
        id: string;
        pilot: {
          __typename: "Pilot";
          id: string;
          name: string;
          description: string;
          budget: number | null;
          stakeholders: Array<string | null> | null;
          start: string | null;
          end: string | null;
          contact: string | null;
        };
        content: string;
        state: boolean;
      } | null> | null;
      nextToken: string | null;
    } | null;
    budget: number | null;
    stakeholders: Array<string | null> | null;
    start: string | null;
    end: string | null;
    contact: string | null;
  };
  content: string;
  state: boolean;
};

export type UpdateObjectiveMutation = {
  __typename: "Objective";
  id: string;
  pilot: {
    __typename: "Pilot";
    id: string;
    name: string;
    description: string;
    objective: {
      __typename: "ModelObjectiveConnection";
      items: Array<{
        __typename: "Objective";
        id: string;
        pilot: {
          __typename: "Pilot";
          id: string;
          name: string;
          description: string;
          budget: number | null;
          stakeholders: Array<string | null> | null;
          start: string | null;
          end: string | null;
          contact: string | null;
        };
        content: string;
        state: boolean;
      } | null> | null;
      nextToken: string | null;
    } | null;
    budget: number | null;
    stakeholders: Array<string | null> | null;
    start: string | null;
    end: string | null;
    contact: string | null;
  };
  content: string;
  state: boolean;
};

export type DeleteObjectiveMutation = {
  __typename: "Objective";
  id: string;
  pilot: {
    __typename: "Pilot";
    id: string;
    name: string;
    description: string;
    objective: {
      __typename: "ModelObjectiveConnection";
      items: Array<{
        __typename: "Objective";
        id: string;
        pilot: {
          __typename: "Pilot";
          id: string;
          name: string;
          description: string;
          budget: number | null;
          stakeholders: Array<string | null> | null;
          start: string | null;
          end: string | null;
          contact: string | null;
        };
        content: string;
        state: boolean;
      } | null> | null;
      nextToken: string | null;
    } | null;
    budget: number | null;
    stakeholders: Array<string | null> | null;
    start: string | null;
    end: string | null;
    contact: string | null;
  };
  content: string;
  state: boolean;
};

export type CreateIoTDataMutation = {
  __typename: "IoTData";
  uuid: string;
  ts: number;
  type: string;
  battery: number | null;
  moisture: number | null;
  CO2: number | null;
  pH: number | null;
  conductivity: number | null;
  solids: number | null;
  salinity: number | null;
  s_gravity: number | null;
  uptime: Array<number | null> | null;
  total: number | null;
  count: number | null;
  direction: string | null;
  down: number | null;
  up: number | null;
};

export type CreateDatasetMutation = {
  __typename: "Dataset";
  id: string;
  name: string | null;
  desc: string | null;
  api_url: string | null;
  parent_url: string | null;
  type: string | null;
  fields: {
    __typename: "ModelFieldConnection";
    items: Array<{
      __typename: "Field";
      id: string;
      name: string | null;
      normalized_name: string | null;
      alias: string | null;
      type: string | null;
      dataset: {
        __typename: "Dataset";
        id: string;
        name: string | null;
        desc: string | null;
        api_url: string | null;
        parent_url: string | null;
        type: string | null;
        fields: {
          __typename: "ModelFieldConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateFieldMutation = {
  __typename: "Field";
  id: string;
  name: string | null;
  normalized_name: string | null;
  alias: string | null;
  type: string | null;
  dataset: {
    __typename: "Dataset";
    id: string;
    name: string | null;
    desc: string | null;
    api_url: string | null;
    parent_url: string | null;
    type: string | null;
    fields: {
      __typename: "ModelFieldConnection";
      items: Array<{
        __typename: "Field";
        id: string;
        name: string | null;
        normalized_name: string | null;
        alias: string | null;
        type: string | null;
        dataset: {
          __typename: "Dataset";
          id: string;
          name: string | null;
          desc: string | null;
          api_url: string | null;
          parent_url: string | null;
          type: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type GetIoTDeviceQuery = {
  __typename: "IoTDevice";
  id: string;
  uuid: string;
  type: string;
  fields: Array<string | null>;
};

export type ListIoTDevicesQuery = {
  __typename: "ModelIoTDeviceConnection";
  items: Array<{
    __typename: "IoTDevice";
    id: string;
    uuid: string;
    type: string;
    fields: Array<string | null>;
  } | null> | null;
  nextToken: string | null;
};

export type GetIoTDataQuery = {
  __typename: "IoTData";
  uuid: string;
  ts: number;
  type: string;
  battery: number | null;
  moisture: number | null;
  CO2: number | null;
  pH: number | null;
  conductivity: number | null;
  solids: number | null;
  salinity: number | null;
  s_gravity: number | null;
  uptime: Array<number | null> | null;
  total: number | null;
  count: number | null;
  direction: string | null;
  down: number | null;
  up: number | null;
};

export type ListIoTDatasQuery = {
  __typename: "ModelIoTDataConnection";
  items: Array<{
    __typename: "IoTData";
    uuid: string;
    ts: number;
    type: string;
    battery: number | null;
    moisture: number | null;
    CO2: number | null;
    pH: number | null;
    conductivity: number | null;
    solids: number | null;
    salinity: number | null;
    s_gravity: number | null;
    uptime: Array<number | null> | null;
    total: number | null;
    count: number | null;
    direction: string | null;
    down: number | null;
    up: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  votes: number;
  owner: string | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      owner: string | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        content: string;
        votes: number;
        owner: string | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
        tags: string | null;
      };
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: string | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    votes: number;
    owner: string | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        owner: string | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          content: string;
          votes: number;
          owner: string | null;
          tags: string | null;
        };
        content: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  owner: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    votes: number;
    owner: string | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        owner: string | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          content: string;
          votes: number;
          owner: string | null;
          tags: string | null;
        };
        content: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: string | null;
  };
  content: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    owner: string | null;
    post: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      votes: number;
      owner: string | null;
      comments: {
        __typename: "ModelCommentConnection";
        items: Array<{
          __typename: "Comment";
          id: string;
          owner: string | null;
          content: string;
        } | null> | null;
        nextToken: string | null;
      } | null;
      tags: string | null;
    };
    content: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDashboardQuery = {
  __typename: "Dashboard";
  id: string;
  name: string | null;
  owner: string | null;
  desc: string | null;
  charts: {
    __typename: "ModelChartConnection";
    items: Array<{
      __typename: "Chart";
      id: string;
      name: string | null;
      type: string | null;
      category: string | null;
      dataset1: string | null;
      field1: string | null;
      dataset2: string | null;
      field2: string | null;
      dashboard: {
        __typename: "Dashboard";
        id: string;
        name: string | null;
        owner: string | null;
        desc: string | null;
        charts: {
          __typename: "ModelChartConnection";
          nextToken: string | null;
        } | null;
        tags: Array<string | null>;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: Array<string | null>;
};

export type ListDashboardsQuery = {
  __typename: "ModelDashboardConnection";
  items: Array<{
    __typename: "Dashboard";
    id: string;
    name: string | null;
    owner: string | null;
    desc: string | null;
    charts: {
      __typename: "ModelChartConnection";
      items: Array<{
        __typename: "Chart";
        id: string;
        name: string | null;
        type: string | null;
        category: string | null;
        dataset1: string | null;
        field1: string | null;
        dataset2: string | null;
        field2: string | null;
        dashboard: {
          __typename: "Dashboard";
          id: string;
          name: string | null;
          owner: string | null;
          desc: string | null;
          tags: Array<string | null>;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: Array<string | null>;
  } | null> | null;
  nextToken: string | null;
};

export type GetChartQuery = {
  __typename: "Chart";
  id: string;
  name: string | null;
  type: string | null;
  category: string | null;
  dataset1: string | null;
  field1: string | null;
  dataset2: string | null;
  field2: string | null;
  dashboard: {
    __typename: "Dashboard";
    id: string;
    name: string | null;
    owner: string | null;
    desc: string | null;
    charts: {
      __typename: "ModelChartConnection";
      items: Array<{
        __typename: "Chart";
        id: string;
        name: string | null;
        type: string | null;
        category: string | null;
        dataset1: string | null;
        field1: string | null;
        dataset2: string | null;
        field2: string | null;
        dashboard: {
          __typename: "Dashboard";
          id: string;
          name: string | null;
          owner: string | null;
          desc: string | null;
          tags: Array<string | null>;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: Array<string | null>;
  } | null;
};

export type ListChartsQuery = {
  __typename: "ModelChartConnection";
  items: Array<{
    __typename: "Chart";
    id: string;
    name: string | null;
    type: string | null;
    category: string | null;
    dataset1: string | null;
    field1: string | null;
    dataset2: string | null;
    field2: string | null;
    dashboard: {
      __typename: "Dashboard";
      id: string;
      name: string | null;
      owner: string | null;
      desc: string | null;
      charts: {
        __typename: "ModelChartConnection";
        items: Array<{
          __typename: "Chart";
          id: string;
          name: string | null;
          type: string | null;
          category: string | null;
          dataset1: string | null;
          field1: string | null;
          dataset2: string | null;
          field2: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      tags: Array<string | null>;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetDatasetQuery = {
  __typename: "Dataset";
  id: string;
  name: string | null;
  desc: string | null;
  api_url: string | null;
  parent_url: string | null;
  type: string | null;
  fields: {
    __typename: "ModelFieldConnection";
    items: Array<{
      __typename: "Field";
      id: string;
      name: string | null;
      normalized_name: string | null;
      alias: string | null;
      type: string | null;
      dataset: {
        __typename: "Dataset";
        id: string;
        name: string | null;
        desc: string | null;
        api_url: string | null;
        parent_url: string | null;
        type: string | null;
        fields: {
          __typename: "ModelFieldConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListDatasetsQuery = {
  __typename: "ModelDatasetConnection";
  items: Array<{
    __typename: "Dataset";
    id: string;
    name: string | null;
    desc: string | null;
    api_url: string | null;
    parent_url: string | null;
    type: string | null;
    fields: {
      __typename: "ModelFieldConnection";
      items: Array<{
        __typename: "Field";
        id: string;
        name: string | null;
        normalized_name: string | null;
        alias: string | null;
        type: string | null;
        dataset: {
          __typename: "Dataset";
          id: string;
          name: string | null;
          desc: string | null;
          api_url: string | null;
          parent_url: string | null;
          type: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetFieldQuery = {
  __typename: "Field";
  id: string;
  name: string | null;
  normalized_name: string | null;
  alias: string | null;
  type: string | null;
  dataset: {
    __typename: "Dataset";
    id: string;
    name: string | null;
    desc: string | null;
    api_url: string | null;
    parent_url: string | null;
    type: string | null;
    fields: {
      __typename: "ModelFieldConnection";
      items: Array<{
        __typename: "Field";
        id: string;
        name: string | null;
        normalized_name: string | null;
        alias: string | null;
        type: string | null;
        dataset: {
          __typename: "Dataset";
          id: string;
          name: string | null;
          desc: string | null;
          api_url: string | null;
          parent_url: string | null;
          type: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListFieldsQuery = {
  __typename: "ModelFieldConnection";
  items: Array<{
    __typename: "Field";
    id: string;
    name: string | null;
    normalized_name: string | null;
    alias: string | null;
    type: string | null;
    dataset: {
      __typename: "Dataset";
      id: string;
      name: string | null;
      desc: string | null;
      api_url: string | null;
      parent_url: string | null;
      type: string | null;
      fields: {
        __typename: "ModelFieldConnection";
        items: Array<{
          __typename: "Field";
          id: string;
          name: string | null;
          normalized_name: string | null;
          alias: string | null;
          type: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPilotQuery = {
  __typename: "Pilot";
  id: string;
  name: string;
  description: string;
  objective: {
    __typename: "ModelObjectiveConnection";
    items: Array<{
      __typename: "Objective";
      id: string;
      pilot: {
        __typename: "Pilot";
        id: string;
        name: string;
        description: string;
        objective: {
          __typename: "ModelObjectiveConnection";
          nextToken: string | null;
        } | null;
        budget: number | null;
        stakeholders: Array<string | null> | null;
        start: string | null;
        end: string | null;
        contact: string | null;
      };
      content: string;
      state: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
  budget: number | null;
  stakeholders: Array<string | null> | null;
  start: string | null;
  end: string | null;
  contact: string | null;
};

export type ListPilotsQuery = {
  __typename: "ModelPilotConnection";
  items: Array<{
    __typename: "Pilot";
    id: string;
    name: string;
    description: string;
    objective: {
      __typename: "ModelObjectiveConnection";
      items: Array<{
        __typename: "Objective";
        id: string;
        pilot: {
          __typename: "Pilot";
          id: string;
          name: string;
          description: string;
          budget: number | null;
          stakeholders: Array<string | null> | null;
          start: string | null;
          end: string | null;
          contact: string | null;
        };
        content: string;
        state: boolean;
      } | null> | null;
      nextToken: string | null;
    } | null;
    budget: number | null;
    stakeholders: Array<string | null> | null;
    start: string | null;
    end: string | null;
    contact: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetObjectiveQuery = {
  __typename: "Objective";
  id: string;
  pilot: {
    __typename: "Pilot";
    id: string;
    name: string;
    description: string;
    objective: {
      __typename: "ModelObjectiveConnection";
      items: Array<{
        __typename: "Objective";
        id: string;
        pilot: {
          __typename: "Pilot";
          id: string;
          name: string;
          description: string;
          budget: number | null;
          stakeholders: Array<string | null> | null;
          start: string | null;
          end: string | null;
          contact: string | null;
        };
        content: string;
        state: boolean;
      } | null> | null;
      nextToken: string | null;
    } | null;
    budget: number | null;
    stakeholders: Array<string | null> | null;
    start: string | null;
    end: string | null;
    contact: string | null;
  };
  content: string;
  state: boolean;
};

export type ListObjectivesQuery = {
  __typename: "ModelObjectiveConnection";
  items: Array<{
    __typename: "Objective";
    id: string;
    pilot: {
      __typename: "Pilot";
      id: string;
      name: string;
      description: string;
      objective: {
        __typename: "ModelObjectiveConnection";
        items: Array<{
          __typename: "Objective";
          id: string;
          content: string;
          state: boolean;
        } | null> | null;
        nextToken: string | null;
      } | null;
      budget: number | null;
      stakeholders: Array<string | null> | null;
      start: string | null;
      end: string | null;
      contact: string | null;
    };
    content: string;
    state: boolean;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateIoTDeviceSubscription = {
  __typename: "IoTDevice";
  id: string;
  uuid: string;
  type: string;
  fields: Array<string | null>;
};

export type OnUpdateIoTDeviceSubscription = {
  __typename: "IoTDevice";
  id: string;
  uuid: string;
  type: string;
  fields: Array<string | null>;
};

export type OnDeleteIoTDeviceSubscription = {
  __typename: "IoTDevice";
  id: string;
  uuid: string;
  type: string;
  fields: Array<string | null>;
};

export type OnCreateIoTDataSubscription = {
  __typename: "IoTData";
  uuid: string;
  ts: number;
  type: string;
  battery: number | null;
  moisture: number | null;
  CO2: number | null;
  pH: number | null;
  conductivity: number | null;
  solids: number | null;
  salinity: number | null;
  s_gravity: number | null;
  uptime: Array<number | null> | null;
  total: number | null;
  count: number | null;
  direction: string | null;
  down: number | null;
  up: number | null;
};

export type OnUpdateIoTDataSubscription = {
  __typename: "IoTData";
  uuid: string;
  ts: number;
  type: string;
  battery: number | null;
  moisture: number | null;
  CO2: number | null;
  pH: number | null;
  conductivity: number | null;
  solids: number | null;
  salinity: number | null;
  s_gravity: number | null;
  uptime: Array<number | null> | null;
  total: number | null;
  count: number | null;
  direction: string | null;
  down: number | null;
  up: number | null;
};

export type OnDeleteIoTDataSubscription = {
  __typename: "IoTData";
  uuid: string;
  ts: number;
  type: string;
  battery: number | null;
  moisture: number | null;
  CO2: number | null;
  pH: number | null;
  conductivity: number | null;
  solids: number | null;
  salinity: number | null;
  s_gravity: number | null;
  uptime: Array<number | null> | null;
  total: number | null;
  count: number | null;
  direction: string | null;
  down: number | null;
  up: number | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  votes: number;
  owner: string | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      owner: string | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        content: string;
        votes: number;
        owner: string | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
        tags: string | null;
      };
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: string | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  votes: number;
  owner: string | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      owner: string | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        content: string;
        votes: number;
        owner: string | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
        tags: string | null;
      };
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: string | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  votes: number;
  owner: string | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      owner: string | null;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        content: string;
        votes: number;
        owner: string | null;
        comments: {
          __typename: "ModelCommentConnection";
          nextToken: string | null;
        } | null;
        tags: string | null;
      };
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: string | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  owner: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    votes: number;
    owner: string | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        owner: string | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          content: string;
          votes: number;
          owner: string | null;
          tags: string | null;
        };
        content: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: string | null;
  };
  content: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  owner: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    votes: number;
    owner: string | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        owner: string | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          content: string;
          votes: number;
          owner: string | null;
          tags: string | null;
        };
        content: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: string | null;
  };
  content: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  owner: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    votes: number;
    owner: string | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        owner: string | null;
        post: {
          __typename: "Post";
          id: string;
          title: string;
          content: string;
          votes: number;
          owner: string | null;
          tags: string | null;
        };
        content: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: string | null;
  };
  content: string;
};

export type OnCreateDashboardSubscription = {
  __typename: "Dashboard";
  id: string;
  name: string | null;
  owner: string | null;
  desc: string | null;
  charts: {
    __typename: "ModelChartConnection";
    items: Array<{
      __typename: "Chart";
      id: string;
      name: string | null;
      type: string | null;
      category: string | null;
      dataset1: string | null;
      field1: string | null;
      dataset2: string | null;
      field2: string | null;
      dashboard: {
        __typename: "Dashboard";
        id: string;
        name: string | null;
        owner: string | null;
        desc: string | null;
        charts: {
          __typename: "ModelChartConnection";
          nextToken: string | null;
        } | null;
        tags: Array<string | null>;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: Array<string | null>;
};

export type OnUpdateDashboardSubscription = {
  __typename: "Dashboard";
  id: string;
  name: string | null;
  owner: string | null;
  desc: string | null;
  charts: {
    __typename: "ModelChartConnection";
    items: Array<{
      __typename: "Chart";
      id: string;
      name: string | null;
      type: string | null;
      category: string | null;
      dataset1: string | null;
      field1: string | null;
      dataset2: string | null;
      field2: string | null;
      dashboard: {
        __typename: "Dashboard";
        id: string;
        name: string | null;
        owner: string | null;
        desc: string | null;
        charts: {
          __typename: "ModelChartConnection";
          nextToken: string | null;
        } | null;
        tags: Array<string | null>;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: Array<string | null>;
};

export type OnDeleteDashboardSubscription = {
  __typename: "Dashboard";
  id: string;
  name: string | null;
  owner: string | null;
  desc: string | null;
  charts: {
    __typename: "ModelChartConnection";
    items: Array<{
      __typename: "Chart";
      id: string;
      name: string | null;
      type: string | null;
      category: string | null;
      dataset1: string | null;
      field1: string | null;
      dataset2: string | null;
      field2: string | null;
      dashboard: {
        __typename: "Dashboard";
        id: string;
        name: string | null;
        owner: string | null;
        desc: string | null;
        charts: {
          __typename: "ModelChartConnection";
          nextToken: string | null;
        } | null;
        tags: Array<string | null>;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  tags: Array<string | null>;
};

export type OnCreateChartSubscription = {
  __typename: "Chart";
  id: string;
  name: string | null;
  type: string | null;
  category: string | null;
  dataset1: string | null;
  field1: string | null;
  dataset2: string | null;
  field2: string | null;
  dashboard: {
    __typename: "Dashboard";
    id: string;
    name: string | null;
    owner: string | null;
    desc: string | null;
    charts: {
      __typename: "ModelChartConnection";
      items: Array<{
        __typename: "Chart";
        id: string;
        name: string | null;
        type: string | null;
        category: string | null;
        dataset1: string | null;
        field1: string | null;
        dataset2: string | null;
        field2: string | null;
        dashboard: {
          __typename: "Dashboard";
          id: string;
          name: string | null;
          owner: string | null;
          desc: string | null;
          tags: Array<string | null>;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: Array<string | null>;
  } | null;
};

export type OnUpdateChartSubscription = {
  __typename: "Chart";
  id: string;
  name: string | null;
  type: string | null;
  category: string | null;
  dataset1: string | null;
  field1: string | null;
  dataset2: string | null;
  field2: string | null;
  dashboard: {
    __typename: "Dashboard";
    id: string;
    name: string | null;
    owner: string | null;
    desc: string | null;
    charts: {
      __typename: "ModelChartConnection";
      items: Array<{
        __typename: "Chart";
        id: string;
        name: string | null;
        type: string | null;
        category: string | null;
        dataset1: string | null;
        field1: string | null;
        dataset2: string | null;
        field2: string | null;
        dashboard: {
          __typename: "Dashboard";
          id: string;
          name: string | null;
          owner: string | null;
          desc: string | null;
          tags: Array<string | null>;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: Array<string | null>;
  } | null;
};

export type OnDeleteChartSubscription = {
  __typename: "Chart";
  id: string;
  name: string | null;
  type: string | null;
  category: string | null;
  dataset1: string | null;
  field1: string | null;
  dataset2: string | null;
  field2: string | null;
  dashboard: {
    __typename: "Dashboard";
    id: string;
    name: string | null;
    owner: string | null;
    desc: string | null;
    charts: {
      __typename: "ModelChartConnection";
      items: Array<{
        __typename: "Chart";
        id: string;
        name: string | null;
        type: string | null;
        category: string | null;
        dataset1: string | null;
        field1: string | null;
        dataset2: string | null;
        field2: string | null;
        dashboard: {
          __typename: "Dashboard";
          id: string;
          name: string | null;
          owner: string | null;
          desc: string | null;
          tags: Array<string | null>;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    tags: Array<string | null>;
  } | null;
};

export type OnUpdateDatasetSubscription = {
  __typename: "Dataset";
  id: string;
  name: string | null;
  desc: string | null;
  api_url: string | null;
  parent_url: string | null;
  type: string | null;
  fields: {
    __typename: "ModelFieldConnection";
    items: Array<{
      __typename: "Field";
      id: string;
      name: string | null;
      normalized_name: string | null;
      alias: string | null;
      type: string | null;
      dataset: {
        __typename: "Dataset";
        id: string;
        name: string | null;
        desc: string | null;
        api_url: string | null;
        parent_url: string | null;
        type: string | null;
        fields: {
          __typename: "ModelFieldConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteDatasetSubscription = {
  __typename: "Dataset";
  id: string;
  name: string | null;
  desc: string | null;
  api_url: string | null;
  parent_url: string | null;
  type: string | null;
  fields: {
    __typename: "ModelFieldConnection";
    items: Array<{
      __typename: "Field";
      id: string;
      name: string | null;
      normalized_name: string | null;
      alias: string | null;
      type: string | null;
      dataset: {
        __typename: "Dataset";
        id: string;
        name: string | null;
        desc: string | null;
        api_url: string | null;
        parent_url: string | null;
        type: string | null;
        fields: {
          __typename: "ModelFieldConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateFieldSubscription = {
  __typename: "Field";
  id: string;
  name: string | null;
  normalized_name: string | null;
  alias: string | null;
  type: string | null;
  dataset: {
    __typename: "Dataset";
    id: string;
    name: string | null;
    desc: string | null;
    api_url: string | null;
    parent_url: string | null;
    type: string | null;
    fields: {
      __typename: "ModelFieldConnection";
      items: Array<{
        __typename: "Field";
        id: string;
        name: string | null;
        normalized_name: string | null;
        alias: string | null;
        type: string | null;
        dataset: {
          __typename: "Dataset";
          id: string;
          name: string | null;
          desc: string | null;
          api_url: string | null;
          parent_url: string | null;
          type: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteFieldSubscription = {
  __typename: "Field";
  id: string;
  name: string | null;
  normalized_name: string | null;
  alias: string | null;
  type: string | null;
  dataset: {
    __typename: "Dataset";
    id: string;
    name: string | null;
    desc: string | null;
    api_url: string | null;
    parent_url: string | null;
    type: string | null;
    fields: {
      __typename: "ModelFieldConnection";
      items: Array<{
        __typename: "Field";
        id: string;
        name: string | null;
        normalized_name: string | null;
        alias: string | null;
        type: string | null;
        dataset: {
          __typename: "Dataset";
          id: string;
          name: string | null;
          desc: string | null;
          api_url: string | null;
          parent_url: string | null;
          type: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreatePilotSubscription = {
  __typename: "Pilot";
  id: string;
  name: string;
  description: string;
  objective: {
    __typename: "ModelObjectiveConnection";
    items: Array<{
      __typename: "Objective";
      id: string;
      pilot: {
        __typename: "Pilot";
        id: string;
        name: string;
        description: string;
        objective: {
          __typename: "ModelObjectiveConnection";
          nextToken: string | null;
        } | null;
        budget: number | null;
        stakeholders: Array<string | null> | null;
        start: string | null;
        end: string | null;
        contact: string | null;
      };
      content: string;
      state: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
  budget: number | null;
  stakeholders: Array<string | null> | null;
  start: string | null;
  end: string | null;
  contact: string | null;
};

export type OnUpdatePilotSubscription = {
  __typename: "Pilot";
  id: string;
  name: string;
  description: string;
  objective: {
    __typename: "ModelObjectiveConnection";
    items: Array<{
      __typename: "Objective";
      id: string;
      pilot: {
        __typename: "Pilot";
        id: string;
        name: string;
        description: string;
        objective: {
          __typename: "ModelObjectiveConnection";
          nextToken: string | null;
        } | null;
        budget: number | null;
        stakeholders: Array<string | null> | null;
        start: string | null;
        end: string | null;
        contact: string | null;
      };
      content: string;
      state: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
  budget: number | null;
  stakeholders: Array<string | null> | null;
  start: string | null;
  end: string | null;
  contact: string | null;
};

export type OnDeletePilotSubscription = {
  __typename: "Pilot";
  id: string;
  name: string;
  description: string;
  objective: {
    __typename: "ModelObjectiveConnection";
    items: Array<{
      __typename: "Objective";
      id: string;
      pilot: {
        __typename: "Pilot";
        id: string;
        name: string;
        description: string;
        objective: {
          __typename: "ModelObjectiveConnection";
          nextToken: string | null;
        } | null;
        budget: number | null;
        stakeholders: Array<string | null> | null;
        start: string | null;
        end: string | null;
        contact: string | null;
      };
      content: string;
      state: boolean;
    } | null> | null;
    nextToken: string | null;
  } | null;
  budget: number | null;
  stakeholders: Array<string | null> | null;
  start: string | null;
  end: string | null;
  contact: string | null;
};

export type OnCreateObjectiveSubscription = {
  __typename: "Objective";
  id: string;
  pilot: {
    __typename: "Pilot";
    id: string;
    name: string;
    description: string;
    objective: {
      __typename: "ModelObjectiveConnection";
      items: Array<{
        __typename: "Objective";
        id: string;
        pilot: {
          __typename: "Pilot";
          id: string;
          name: string;
          description: string;
          budget: number | null;
          stakeholders: Array<string | null> | null;
          start: string | null;
          end: string | null;
          contact: string | null;
        };
        content: string;
        state: boolean;
      } | null> | null;
      nextToken: string | null;
    } | null;
    budget: number | null;
    stakeholders: Array<string | null> | null;
    start: string | null;
    end: string | null;
    contact: string | null;
  };
  content: string;
  state: boolean;
};

export type OnUpdateObjectiveSubscription = {
  __typename: "Objective";
  id: string;
  pilot: {
    __typename: "Pilot";
    id: string;
    name: string;
    description: string;
    objective: {
      __typename: "ModelObjectiveConnection";
      items: Array<{
        __typename: "Objective";
        id: string;
        pilot: {
          __typename: "Pilot";
          id: string;
          name: string;
          description: string;
          budget: number | null;
          stakeholders: Array<string | null> | null;
          start: string | null;
          end: string | null;
          contact: string | null;
        };
        content: string;
        state: boolean;
      } | null> | null;
      nextToken: string | null;
    } | null;
    budget: number | null;
    stakeholders: Array<string | null> | null;
    start: string | null;
    end: string | null;
    contact: string | null;
  };
  content: string;
  state: boolean;
};

export type OnDeleteObjectiveSubscription = {
  __typename: "Objective";
  id: string;
  pilot: {
    __typename: "Pilot";
    id: string;
    name: string;
    description: string;
    objective: {
      __typename: "ModelObjectiveConnection";
      items: Array<{
        __typename: "Objective";
        id: string;
        pilot: {
          __typename: "Pilot";
          id: string;
          name: string;
          description: string;
          budget: number | null;
          stakeholders: Array<string | null> | null;
          start: string | null;
          end: string | null;
          contact: string | null;
        };
        content: string;
        state: boolean;
      } | null> | null;
      nextToken: string | null;
    } | null;
    budget: number | null;
    stakeholders: Array<string | null> | null;
    start: string | null;
    end: string | null;
    contact: string | null;
  };
  content: string;
  state: boolean;
};

export type OnCreateDatasetSubscription = {
  __typename: "Dataset";
  id: string;
  name: string | null;
  desc: string | null;
  api_url: string | null;
  parent_url: string | null;
  type: string | null;
  fields: {
    __typename: "ModelFieldConnection";
    items: Array<{
      __typename: "Field";
      id: string;
      name: string | null;
      normalized_name: string | null;
      alias: string | null;
      type: string | null;
      dataset: {
        __typename: "Dataset";
        id: string;
        name: string | null;
        desc: string | null;
        api_url: string | null;
        parent_url: string | null;
        type: string | null;
        fields: {
          __typename: "ModelFieldConnection";
          nextToken: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateFieldSubscription = {
  __typename: "Field";
  id: string;
  name: string | null;
  normalized_name: string | null;
  alias: string | null;
  type: string | null;
  dataset: {
    __typename: "Dataset";
    id: string;
    name: string | null;
    desc: string | null;
    api_url: string | null;
    parent_url: string | null;
    type: string | null;
    fields: {
      __typename: "ModelFieldConnection";
      items: Array<{
        __typename: "Field";
        id: string;
        name: string | null;
        normalized_name: string | null;
        alias: string | null;
        type: string | null;
        dataset: {
          __typename: "Dataset";
          id: string;
          name: string | null;
          desc: string | null;
          api_url: string | null;
          parent_url: string | null;
          type: string | null;
        } | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateIoTDevice(
    input: CreateIoTDeviceInput
  ): Promise<CreateIoTDeviceMutation> {
    const statement = `mutation CreateIoTDevice($input: CreateIoTDeviceInput!) {
        createIoTDevice(input: $input) {
          __typename
          id
          uuid
          type
          fields
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateIoTDeviceMutation>response.data.createIoTDevice;
  }
  async UpdateIoTDevice(
    input: UpdateIoTDeviceInput
  ): Promise<UpdateIoTDeviceMutation> {
    const statement = `mutation UpdateIoTDevice($input: UpdateIoTDeviceInput!) {
        updateIoTDevice(input: $input) {
          __typename
          id
          uuid
          type
          fields
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateIoTDeviceMutation>response.data.updateIoTDevice;
  }
  async DeleteIoTDevice(
    input: DeleteIoTDeviceInput
  ): Promise<DeleteIoTDeviceMutation> {
    const statement = `mutation DeleteIoTDevice($input: DeleteIoTDeviceInput!) {
        deleteIoTDevice(input: $input) {
          __typename
          id
          uuid
          type
          fields
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteIoTDeviceMutation>response.data.deleteIoTDevice;
  }
  async UpdateIoTData(
    input: UpdateIoTDataInput
  ): Promise<UpdateIoTDataMutation> {
    const statement = `mutation UpdateIoTData($input: UpdateIoTDataInput!) {
        updateIoTData(input: $input) {
          __typename
          uuid
          ts
          type
          battery
          moisture
          CO2
          pH
          conductivity
          solids
          salinity
          s_gravity
          uptime
          total
          count
          direction
          down
          up
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateIoTDataMutation>response.data.updateIoTData;
  }
  async DeleteIoTData(
    input: DeleteIoTDataInput
  ): Promise<DeleteIoTDataMutation> {
    const statement = `mutation DeleteIoTData($input: DeleteIoTDataInput!) {
        deleteIoTData(input: $input) {
          __typename
          uuid
          ts
          type
          battery
          moisture
          CO2
          pH
          conductivity
          solids
          salinity
          s_gravity
          uptime
          total
          count
          direction
          down
          up
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteIoTDataMutation>response.data.deleteIoTData;
  }
  async CreatePost(input: CreatePostInput): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
          __typename
          id
          title
          content
          votes
          owner
          comments {
            __typename
            items {
              __typename
              id
              owner
              post {
                __typename
                id
                title
                content
                votes
                owner
                comments {
                  __typename
                  nextToken
                }
                tags
              }
              content
            }
            nextToken
          }
          tags
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(input: UpdatePostInput): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!) {
        updatePost(input: $input) {
          __typename
          id
          title
          content
          votes
          owner
          comments {
            __typename
            items {
              __typename
              id
              owner
              post {
                __typename
                id
                title
                content
                votes
                owner
                comments {
                  __typename
                  nextToken
                }
                tags
              }
              content
            }
            nextToken
          }
          tags
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(input: DeletePostInput): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!) {
        deletePost(input: $input) {
          __typename
          id
          title
          content
          votes
          owner
          comments {
            __typename
            items {
              __typename
              id
              owner
              post {
                __typename
                id
                title
                content
                votes
                owner
                comments {
                  __typename
                  nextToken
                }
                tags
              }
              content
            }
            nextToken
          }
          tags
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!) {
        createComment(input: $input) {
          __typename
          id
          owner
          post {
            __typename
            id
            title
            content
            votes
            owner
            comments {
              __typename
              items {
                __typename
                id
                owner
                post {
                  __typename
                  id
                  title
                  content
                  votes
                  owner
                  tags
                }
                content
              }
              nextToken
            }
            tags
          }
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!) {
        updateComment(input: $input) {
          __typename
          id
          owner
          post {
            __typename
            id
            title
            content
            votes
            owner
            comments {
              __typename
              items {
                __typename
                id
                owner
                post {
                  __typename
                  id
                  title
                  content
                  votes
                  owner
                  tags
                }
                content
              }
              nextToken
            }
            tags
          }
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!) {
        deleteComment(input: $input) {
          __typename
          id
          owner
          post {
            __typename
            id
            title
            content
            votes
            owner
            comments {
              __typename
              items {
                __typename
                id
                owner
                post {
                  __typename
                  id
                  title
                  content
                  votes
                  owner
                  tags
                }
                content
              }
              nextToken
            }
            tags
          }
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateDashboard(
    input: CreateDashboardInput
  ): Promise<CreateDashboardMutation> {
    const statement = `mutation CreateDashboard($input: CreateDashboardInput!) {
        createDashboard(input: $input) {
          __typename
          id
          name
          owner
          desc
          charts {
            __typename
            items {
              __typename
              id
              name
              type
              category
              dataset1
              field1
              dataset2
              field2
              dashboard {
                __typename
                id
                name
                owner
                desc
                charts {
                  __typename
                  nextToken
                }
                tags
              }
            }
            nextToken
          }
          tags
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDashboardMutation>response.data.createDashboard;
  }
  async UpdateDashboard(
    input: UpdateDashboardInput
  ): Promise<UpdateDashboardMutation> {
    const statement = `mutation UpdateDashboard($input: UpdateDashboardInput!) {
        updateDashboard(input: $input) {
          __typename
          id
          name
          owner
          desc
          charts {
            __typename
            items {
              __typename
              id
              name
              type
              category
              dataset1
              field1
              dataset2
              field2
              dashboard {
                __typename
                id
                name
                owner
                desc
                charts {
                  __typename
                  nextToken
                }
                tags
              }
            }
            nextToken
          }
          tags
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDashboardMutation>response.data.updateDashboard;
  }
  async DeleteDashboard(
    input: DeleteDashboardInput
  ): Promise<DeleteDashboardMutation> {
    const statement = `mutation DeleteDashboard($input: DeleteDashboardInput!) {
        deleteDashboard(input: $input) {
          __typename
          id
          name
          owner
          desc
          charts {
            __typename
            items {
              __typename
              id
              name
              type
              category
              dataset1
              field1
              dataset2
              field2
              dashboard {
                __typename
                id
                name
                owner
                desc
                charts {
                  __typename
                  nextToken
                }
                tags
              }
            }
            nextToken
          }
          tags
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDashboardMutation>response.data.deleteDashboard;
  }
  async CreateChart(input: CreateChartInput): Promise<CreateChartMutation> {
    const statement = `mutation CreateChart($input: CreateChartInput!) {
        createChart(input: $input) {
          __typename
          id
          name
          type
          category
          dataset1
          field1
          dataset2
          field2
          dashboard {
            __typename
            id
            name
            owner
            desc
            charts {
              __typename
              items {
                __typename
                id
                name
                type
                category
                dataset1
                field1
                dataset2
                field2
                dashboard {
                  __typename
                  id
                  name
                  owner
                  desc
                  tags
                }
              }
              nextToken
            }
            tags
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChartMutation>response.data.createChart;
  }
  async UpdateChart(input: UpdateChartInput): Promise<UpdateChartMutation> {
    const statement = `mutation UpdateChart($input: UpdateChartInput!) {
        updateChart(input: $input) {
          __typename
          id
          name
          type
          category
          dataset1
          field1
          dataset2
          field2
          dashboard {
            __typename
            id
            name
            owner
            desc
            charts {
              __typename
              items {
                __typename
                id
                name
                type
                category
                dataset1
                field1
                dataset2
                field2
                dashboard {
                  __typename
                  id
                  name
                  owner
                  desc
                  tags
                }
              }
              nextToken
            }
            tags
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChartMutation>response.data.updateChart;
  }
  async DeleteChart(input: DeleteChartInput): Promise<DeleteChartMutation> {
    const statement = `mutation DeleteChart($input: DeleteChartInput!) {
        deleteChart(input: $input) {
          __typename
          id
          name
          type
          category
          dataset1
          field1
          dataset2
          field2
          dashboard {
            __typename
            id
            name
            owner
            desc
            charts {
              __typename
              items {
                __typename
                id
                name
                type
                category
                dataset1
                field1
                dataset2
                field2
                dashboard {
                  __typename
                  id
                  name
                  owner
                  desc
                  tags
                }
              }
              nextToken
            }
            tags
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChartMutation>response.data.deleteChart;
  }
  async UpdateDataset(
    input: UpdateDatasetInput
  ): Promise<UpdateDatasetMutation> {
    const statement = `mutation UpdateDataset($input: UpdateDatasetInput!) {
        updateDataset(input: $input) {
          __typename
          id
          name
          desc
          api_url
          parent_url
          type
          fields {
            __typename
            items {
              __typename
              id
              name
              normalized_name
              alias
              type
              dataset {
                __typename
                id
                name
                desc
                api_url
                parent_url
                type
                fields {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatasetMutation>response.data.updateDataset;
  }
  async DeleteDataset(
    input: DeleteDatasetInput
  ): Promise<DeleteDatasetMutation> {
    const statement = `mutation DeleteDataset($input: DeleteDatasetInput!) {
        deleteDataset(input: $input) {
          __typename
          id
          name
          desc
          api_url
          parent_url
          type
          fields {
            __typename
            items {
              __typename
              id
              name
              normalized_name
              alias
              type
              dataset {
                __typename
                id
                name
                desc
                api_url
                parent_url
                type
                fields {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDatasetMutation>response.data.deleteDataset;
  }
  async UpdateField(input: UpdateFieldInput): Promise<UpdateFieldMutation> {
    const statement = `mutation UpdateField($input: UpdateFieldInput!) {
        updateField(input: $input) {
          __typename
          id
          name
          normalized_name
          alias
          type
          dataset {
            __typename
            id
            name
            desc
            api_url
            parent_url
            type
            fields {
              __typename
              items {
                __typename
                id
                name
                normalized_name
                alias
                type
                dataset {
                  __typename
                  id
                  name
                  desc
                  api_url
                  parent_url
                  type
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFieldMutation>response.data.updateField;
  }
  async DeleteField(input: DeleteFieldInput): Promise<DeleteFieldMutation> {
    const statement = `mutation DeleteField($input: DeleteFieldInput!) {
        deleteField(input: $input) {
          __typename
          id
          name
          normalized_name
          alias
          type
          dataset {
            __typename
            id
            name
            desc
            api_url
            parent_url
            type
            fields {
              __typename
              items {
                __typename
                id
                name
                normalized_name
                alias
                type
                dataset {
                  __typename
                  id
                  name
                  desc
                  api_url
                  parent_url
                  type
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFieldMutation>response.data.deleteField;
  }
  async CreatePilot(input: CreatePilotInput): Promise<CreatePilotMutation> {
    const statement = `mutation CreatePilot($input: CreatePilotInput!) {
        createPilot(input: $input) {
          __typename
<<<<<<< Updated upstream
          id
          name
          description
          objective {
            __typename
            items {
              __typename
              id
              pilot {
                __typename
                id
                name
                description
                objective {
                  __typename
                  nextToken
                }
                budget
                stakeholders
                start
                end
                contact
              }
              content
              state
            }
            nextToken
          }
          budget
          stakeholders
          start
          end
          contact
=======
          uuid
          ts
          type
          battery
          moisture
          CO2
          pH
          conductivity
          solids
          salinity
          s_gravity
          uptime
          total
          count
          direction
          down
          up
>>>>>>> Stashed changes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePilotMutation>response.data.createPilot;
  }
  async UpdatePilot(input: UpdatePilotInput): Promise<UpdatePilotMutation> {
    const statement = `mutation UpdatePilot($input: UpdatePilotInput!) {
        updatePilot(input: $input) {
          __typename
          id
          name
          description
          objective {
            __typename
            items {
              __typename
              id
              pilot {
                __typename
                id
                name
                description
                objective {
                  __typename
                  nextToken
                }
                budget
                stakeholders
                start
                end
                contact
              }
              content
              state
            }
            nextToken
          }
          budget
          stakeholders
          start
          end
          contact
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePilotMutation>response.data.updatePilot;
  }
  async DeletePilot(input: DeletePilotInput): Promise<DeletePilotMutation> {
    const statement = `mutation DeletePilot($input: DeletePilotInput!) {
        deletePilot(input: $input) {
          __typename
          id
          name
          description
          objective {
            __typename
            items {
              __typename
              id
              pilot {
                __typename
                id
                name
                description
                objective {
                  __typename
                  nextToken
                }
                budget
                stakeholders
                start
                end
                contact
              }
              content
              state
            }
            nextToken
          }
          budget
          stakeholders
          start
          end
          contact
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePilotMutation>response.data.deletePilot;
  }
  async CreateObjective(
    input: CreateObjectiveInput
  ): Promise<CreateObjectiveMutation> {
    const statement = `mutation CreateObjective($input: CreateObjectiveInput!) {
        createObjective(input: $input) {
          __typename
          id
          pilot {
            __typename
            id
            name
            description
            objective {
              __typename
              items {
                __typename
                id
                pilot {
                  __typename
                  id
                  name
                  description
                  budget
                  stakeholders
                  start
                  end
                  contact
                }
                content
                state
              }
              nextToken
            }
            budget
            stakeholders
            start
            end
            contact
          }
          content
          state
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateObjectiveMutation>response.data.createObjective;
  }
  async UpdateObjective(
    input: UpdateObjectiveInput
  ): Promise<UpdateObjectiveMutation> {
    const statement = `mutation UpdateObjective($input: UpdateObjectiveInput!) {
        updateObjective(input: $input) {
          __typename
          id
          pilot {
            __typename
            id
            name
            description
            objective {
              __typename
              items {
                __typename
                id
                pilot {
                  __typename
                  id
                  name
                  description
                  budget
                  stakeholders
                  start
                  end
                  contact
                }
                content
                state
              }
              nextToken
            }
            budget
            stakeholders
            start
            end
            contact
          }
          content
          state
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateObjectiveMutation>response.data.updateObjective;
  }
  async DeleteObjective(
    input: DeleteObjectiveInput
  ): Promise<DeleteObjectiveMutation> {
    const statement = `mutation DeleteObjective($input: DeleteObjectiveInput!) {
        deleteObjective(input: $input) {
          __typename
          id
          pilot {
            __typename
            id
            name
            description
            objective {
              __typename
              items {
                __typename
                id
                pilot {
                  __typename
                  id
                  name
                  description
                  budget
                  stakeholders
                  start
                  end
                  contact
                }
                content
                state
              }
              nextToken
            }
            budget
            stakeholders
            start
            end
            contact
          }
          content
          state
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteObjectiveMutation>response.data.deleteObjective;
  }
  async CreateIoTData(
    input: CreateIoTDataInput
  ): Promise<CreateIoTDataMutation> {
    const statement = `mutation CreateIoTData($input: CreateIoTDataInput!) {
        createIoTData(input: $input) {
          __typename
          uuid
          ts
          type
          battery
          moisture
          CO2
          pH
          conductivity
          solids
          salinity
          s_gravity
          uptime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateIoTDataMutation>response.data.createIoTData;
  }
  async CreateDataset(
    input: CreateDatasetInput
  ): Promise<CreateDatasetMutation> {
    const statement = `mutation CreateDataset($input: CreateDatasetInput!) {
        createDataset(input: $input) {
          __typename
          id
          name
          desc
          api_url
          parent_url
          type
          fields {
            __typename
            items {
              __typename
              id
              name
              normalized_name
              alias
              type
              dataset {
                __typename
                id
                name
                desc
                api_url
                parent_url
                type
                fields {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDatasetMutation>response.data.createDataset;
  }
  async CreateField(input: CreateFieldInput): Promise<CreateFieldMutation> {
    const statement = `mutation CreateField($input: CreateFieldInput!) {
        createField(input: $input) {
          __typename
          id
          name
          normalized_name
          alias
          type
          dataset {
            __typename
            id
            name
            desc
            api_url
            parent_url
            type
            fields {
              __typename
              items {
                __typename
                id
                name
                normalized_name
                alias
                type
                dataset {
                  __typename
                  id
                  name
                  desc
                  api_url
                  parent_url
                  type
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFieldMutation>response.data.createField;
  }
  async GetArcgisData(
    dataset?: string,
    field?: string
  ): Promise<string | null> {
    const statement = `query GetArcgisData($dataset: String, $field: String) {
        getARCGISData(dataset: $dataset, field: $field)
      }`;
    const gqlAPIServiceArguments: any = {};
    if (dataset) {
      gqlAPIServiceArguments.dataset = dataset;
    }
    if (field) {
      gqlAPIServiceArguments.field = field;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data;
  }
  async CreateDatasetAndFields(url?: string): Promise<string | null> {
    const statement = `query CreateDatasetAndFields($url: String) {
        createDatasetAndFields(url: $url)
      }`;
    const gqlAPIServiceArguments: any = {};
    if (url) {
      gqlAPIServiceArguments.url = url;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data;
  }
  async GetIoTDevice(id: string): Promise<GetIoTDeviceQuery> {
    const statement = `query GetIoTDevice($id: ID!) {
        getIoTDevice(id: $id) {
          __typename
          id
          uuid
          type
          fields
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetIoTDeviceQuery>response.data.getIoTDevice;
  }
  async ListIoTDevices(
    filter?: ModelIoTDeviceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListIoTDevicesQuery> {
    const statement = `query ListIoTDevices($filter: ModelIoTDeviceFilterInput, $limit: Int, $nextToken: String) {
        listIoTDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            uuid
            type
            fields
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListIoTDevicesQuery>response.data.listIoTDevices;
  }
  async GetIoTData(uuid: string, ts: number): Promise<GetIoTDataQuery> {
    const statement = `query GetIoTData($uuid: ID!, $ts: Int!) {
        getIoTData(uuid: $uuid, ts: $ts) {
          __typename
          uuid
          ts
          type
          battery
          moisture
          CO2
          pH
          conductivity
          solids
          salinity
          s_gravity
          uptime
          total
          count
          direction
          down
          up
        }
      }`;
    const gqlAPIServiceArguments: any = {
      uuid,
      ts
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetIoTDataQuery>response.data.getIoTData;
  }
  async ListIoTDatas(
    uuid?: string,
    ts?: ModelIntKeyConditionInput,
    filter?: ModelIoTDataFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListIoTDatasQuery> {
    const statement = `query ListIoTDatas($uuid: ID, $ts: ModelIntKeyConditionInput, $filter: ModelIoTDataFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listIoTDatas(uuid: $uuid, ts: $ts, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            uuid
            ts
            type
            battery
            moisture
            CO2
            pH
            conductivity
            solids
            salinity
            s_gravity
            uptime
            total
            count
            direction
            down
            up
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (uuid) {
      gqlAPIServiceArguments.uuid = uuid;
    }
    if (ts) {
      gqlAPIServiceArguments.ts = ts;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListIoTDatasQuery>response.data.listIoTDatas;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          content
          votes
          owner
          comments {
            __typename
            items {
              __typename
              id
              owner
              post {
                __typename
                id
                title
                content
                votes
                owner
                comments {
                  __typename
                  nextToken
                }
                tags
              }
              content
            }
            nextToken
          }
          tags
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            votes
            owner
            comments {
              __typename
              items {
                __typename
                id
                owner
                post {
                  __typename
                  id
                  title
                  content
                  votes
                  owner
                  tags
                }
                content
              }
              nextToken
            }
            tags
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          owner
          post {
            __typename
            id
            title
            content
            votes
            owner
            comments {
              __typename
              items {
                __typename
                id
                owner
                post {
                  __typename
                  id
                  title
                  content
                  votes
                  owner
                  tags
                }
                content
              }
              nextToken
            }
            tags
          }
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owner
            post {
              __typename
              id
              title
              content
              votes
              owner
              comments {
                __typename
                items {
                  __typename
                  id
                  owner
                  content
                }
                nextToken
              }
              tags
            }
            content
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetDashboard(id: string): Promise<GetDashboardQuery> {
    const statement = `query GetDashboard($id: ID!) {
        getDashboard(id: $id) {
          __typename
          id
          name
          owner
          desc
          charts {
            __typename
            items {
              __typename
              id
              name
              type
              category
              dataset1
              field1
              dataset2
              field2
              dashboard {
                __typename
                id
                name
                owner
                desc
                charts {
                  __typename
                  nextToken
                }
                tags
              }
            }
            nextToken
          }
          tags
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDashboardQuery>response.data.getDashboard;
  }
  async ListDashboards(
    filter?: ModelDashboardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDashboardsQuery> {
    const statement = `query ListDashboards($filter: ModelDashboardFilterInput, $limit: Int, $nextToken: String) {
        listDashboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            owner
            desc
            charts {
              __typename
              items {
                __typename
                id
                name
                type
                category
                dataset1
                field1
                dataset2
                field2
                dashboard {
                  __typename
                  id
                  name
                  owner
                  desc
                  tags
                }
              }
              nextToken
            }
            tags
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDashboardsQuery>response.data.listDashboards;
  }
  async GetChart(id: string): Promise<GetChartQuery> {
    const statement = `query GetChart($id: ID!) {
        getChart(id: $id) {
          __typename
          id
          name
          type
          category
          dataset1
          field1
          dataset2
          field2
          dashboard {
            __typename
            id
            name
            owner
            desc
            charts {
              __typename
              items {
                __typename
                id
                name
                type
                category
                dataset1
                field1
                dataset2
                field2
                dashboard {
                  __typename
                  id
                  name
                  owner
                  desc
                  tags
                }
              }
              nextToken
            }
            tags
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChartQuery>response.data.getChart;
  }
  async ListCharts(
    filter?: ModelChartFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChartsQuery> {
    const statement = `query ListCharts($filter: ModelChartFilterInput, $limit: Int, $nextToken: String) {
        listCharts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            type
            category
            dataset1
            field1
            dataset2
            field2
            dashboard {
              __typename
              id
              name
              owner
              desc
              charts {
                __typename
                items {
                  __typename
                  id
                  name
                  type
                  category
                  dataset1
                  field1
                  dataset2
                  field2
                }
                nextToken
              }
              tags
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChartsQuery>response.data.listCharts;
  }
  async GetDataset(id: string): Promise<GetDatasetQuery> {
    const statement = `query GetDataset($id: ID!) {
        getDataset(id: $id) {
          __typename
          id
          name
          desc
          api_url
          parent_url
          type
          fields {
            __typename
            items {
              __typename
              id
              name
              normalized_name
              alias
              type
              dataset {
                __typename
                id
                name
                desc
                api_url
                parent_url
                type
                fields {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatasetQuery>response.data.getDataset;
  }
  async ListDatasets(
    filter?: ModelDatasetFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatasetsQuery> {
    const statement = `query ListDatasets($filter: ModelDatasetFilterInput, $limit: Int, $nextToken: String) {
        listDatasets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            desc
            api_url
            parent_url
            type
            fields {
              __typename
              items {
                __typename
                id
                name
                normalized_name
                alias
                type
                dataset {
                  __typename
                  id
                  name
                  desc
                  api_url
                  parent_url
                  type
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatasetsQuery>response.data.listDatasets;
  }
  async GetField(id: string): Promise<GetFieldQuery> {
    const statement = `query GetField($id: ID!) {
        getField(id: $id) {
          __typename
          id
          name
          normalized_name
          alias
          type
          dataset {
            __typename
            id
            name
            desc
            api_url
            parent_url
            type
            fields {
              __typename
              items {
                __typename
                id
                name
                normalized_name
                alias
                type
                dataset {
                  __typename
                  id
                  name
                  desc
                  api_url
                  parent_url
                  type
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFieldQuery>response.data.getField;
  }
  async ListFields(
    filter?: ModelFieldFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFieldsQuery> {
    const statement = `query ListFields($filter: ModelFieldFilterInput, $limit: Int, $nextToken: String) {
        listFields(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            normalized_name
            alias
            type
            dataset {
              __typename
              id
              name
              desc
              api_url
              parent_url
              type
              fields {
                __typename
                items {
                  __typename
                  id
                  name
                  normalized_name
                  alias
                  type
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFieldsQuery>response.data.listFields;
  }
  async GetPilot(id: string): Promise<GetPilotQuery> {
    const statement = `query GetPilot($id: ID!) {
        getPilot(id: $id) {
          __typename
          id
          name
          description
          objective {
            __typename
            items {
              __typename
              id
              pilot {
                __typename
                id
                name
                description
                objective {
                  __typename
                  nextToken
                }
                budget
                stakeholders
                start
                end
                contact
              }
              content
              state
            }
            nextToken
          }
          budget
          stakeholders
          start
          end
          contact
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPilotQuery>response.data.getPilot;
  }
  async ListPilots(
    filter?: ModelPilotFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPilotsQuery> {
    const statement = `query ListPilots($filter: ModelPilotFilterInput, $limit: Int, $nextToken: String) {
        listPilots(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            objective {
              __typename
              items {
                __typename
                id
                pilot {
                  __typename
                  id
                  name
                  description
                  budget
                  stakeholders
                  start
                  end
                  contact
                }
                content
                state
              }
              nextToken
            }
            budget
            stakeholders
            start
            end
            contact
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPilotsQuery>response.data.listPilots;
  }
  async GetObjective(id: string): Promise<GetObjectiveQuery> {
    const statement = `query GetObjective($id: ID!) {
        getObjective(id: $id) {
          __typename
          id
          pilot {
            __typename
            id
            name
            description
            objective {
              __typename
              items {
                __typename
                id
                pilot {
                  __typename
                  id
                  name
                  description
                  budget
                  stakeholders
                  start
                  end
                  contact
                }
                content
                state
              }
              nextToken
            }
            budget
            stakeholders
            start
            end
            contact
          }
          content
          state
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetObjectiveQuery>response.data.getObjective;
  }
  async ListObjectives(
    filter?: ModelObjectiveFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListObjectivesQuery> {
    const statement = `query ListObjectives($filter: ModelObjectiveFilterInput, $limit: Int, $nextToken: String) {
        listObjectives(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            pilot {
              __typename
              id
              name
              description
              objective {
                __typename
                items {
                  __typename
                  id
                  content
                  state
                }
                nextToken
              }
              budget
              stakeholders
              start
              end
              contact
            }
            content
            state
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListObjectivesQuery>response.data.listObjectives;
  }
  OnCreateIoTDeviceListener: Observable<
    OnCreateIoTDeviceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateIoTDevice {
        onCreateIoTDevice {
          __typename
          id
          uuid
          type
          fields
        }
      }`
    )
  ) as Observable<OnCreateIoTDeviceSubscription>;

  OnUpdateIoTDeviceListener: Observable<
    OnUpdateIoTDeviceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateIoTDevice {
        onUpdateIoTDevice {
          __typename
          id
          uuid
          type
          fields
        }
      }`
    )
  ) as Observable<OnUpdateIoTDeviceSubscription>;

  OnDeleteIoTDeviceListener: Observable<
    OnDeleteIoTDeviceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteIoTDevice {
        onDeleteIoTDevice {
          __typename
          id
          uuid
          type
          fields
        }
      }`
    )
  ) as Observable<OnDeleteIoTDeviceSubscription>;

  OnCreateIoTDataListener: Observable<
    OnCreateIoTDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateIoTData {
        onCreateIoTData {
          __typename
          uuid
          ts
          type
          battery
          moisture
          CO2
          pH
          conductivity
          solids
          salinity
          s_gravity
          uptime
          total
          count
          direction
          down
          up
        }
      }`
    )
  ) as Observable<OnCreateIoTDataSubscription>;

  OnUpdateIoTDataListener: Observable<
    OnUpdateIoTDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateIoTData {
        onUpdateIoTData {
          __typename
          uuid
          ts
          type
          battery
          moisture
          CO2
          pH
          conductivity
          solids
          salinity
          s_gravity
          uptime
          total
          count
          direction
          down
          up
        }
      }`
    )
  ) as Observable<OnUpdateIoTDataSubscription>;

  OnDeleteIoTDataListener: Observable<
    OnDeleteIoTDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteIoTData {
        onDeleteIoTData {
          __typename
          uuid
          ts
          type
          battery
          moisture
          CO2
          pH
          conductivity
          solids
          salinity
          s_gravity
          uptime
          total
          count
          direction
          down
          up
        }
      }`
    )
  ) as Observable<OnDeleteIoTDataSubscription>;

  OnCreatePostListener: Observable<OnCreatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost($owner: String!) {
        onCreatePost(owner: $owner) {
          __typename
          id
          title
          content
          votes
          owner
          comments {
            __typename
            items {
              __typename
              id
              owner
              post {
                __typename
                id
                title
                content
                votes
                owner
                comments {
                  __typename
                  nextToken
                }
                tags
              }
              content
            }
            nextToken
          }
          tags
        }
      }`
    )
  ) as Observable<OnCreatePostSubscription>;

  OnUpdatePostListener: Observable<OnUpdatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          content
          votes
          owner
          comments {
            __typename
            items {
              __typename
              id
              owner
              post {
                __typename
                id
                title
                content
                votes
                owner
                comments {
                  __typename
                  nextToken
                }
                tags
              }
              content
            }
            nextToken
          }
          tags
        }
      }`
    )
  ) as Observable<OnUpdatePostSubscription>;

  OnDeletePostListener: Observable<OnDeletePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          content
          votes
          owner
          comments {
            __typename
            items {
              __typename
              id
              owner
              post {
                __typename
                id
                title
                content
                votes
                owner
                comments {
                  __typename
                  nextToken
                }
                tags
              }
              content
            }
            nextToken
          }
          tags
        }
      }`
    )
  ) as Observable<OnDeletePostSubscription>;

  OnCreateCommentListener: Observable<
    OnCreateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment($owner: String!) {
        onCreateComment(owner: $owner) {
          __typename
          id
          owner
          post {
            __typename
            id
            title
            content
            votes
            owner
            comments {
              __typename
              items {
                __typename
                id
                owner
                post {
                  __typename
                  id
                  title
                  content
                  votes
                  owner
                  tags
                }
                content
              }
              nextToken
            }
            tags
          }
          content
        }
      }`
    )
  ) as Observable<OnCreateCommentSubscription>;

  OnUpdateCommentListener: Observable<
    OnUpdateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          owner
          post {
            __typename
            id
            title
            content
            votes
            owner
            comments {
              __typename
              items {
                __typename
                id
                owner
                post {
                  __typename
                  id
                  title
                  content
                  votes
                  owner
                  tags
                }
                content
              }
              nextToken
            }
            tags
          }
          content
        }
      }`
    )
  ) as Observable<OnUpdateCommentSubscription>;

  OnDeleteCommentListener: Observable<
    OnDeleteCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          owner
          post {
            __typename
            id
            title
            content
            votes
            owner
            comments {
              __typename
              items {
                __typename
                id
                owner
                post {
                  __typename
                  id
                  title
                  content
                  votes
                  owner
                  tags
                }
                content
              }
              nextToken
            }
            tags
          }
          content
        }
      }`
    )
  ) as Observable<OnDeleteCommentSubscription>;

  OnCreateDashboardListener: Observable<
    OnCreateDashboardSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDashboard($owner: String!) {
        onCreateDashboard(owner: $owner) {
          __typename
          id
          name
          owner
          desc
          charts {
            __typename
            items {
              __typename
              id
              name
              type
              category
              dataset1
              field1
              dataset2
              field2
              dashboard {
                __typename
                id
                name
                owner
                desc
                charts {
                  __typename
                  nextToken
                }
                tags
              }
            }
            nextToken
          }
          tags
        }
      }`
    )
  ) as Observable<OnCreateDashboardSubscription>;

  OnUpdateDashboardListener: Observable<
    OnUpdateDashboardSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDashboard($owner: String!) {
        onUpdateDashboard(owner: $owner) {
          __typename
          id
          name
          owner
          desc
          charts {
            __typename
            items {
              __typename
              id
              name
              type
              category
              dataset1
              field1
              dataset2
              field2
              dashboard {
                __typename
                id
                name
                owner
                desc
                charts {
                  __typename
                  nextToken
                }
                tags
              }
            }
            nextToken
          }
          tags
        }
      }`
    )
  ) as Observable<OnUpdateDashboardSubscription>;

  OnDeleteDashboardListener: Observable<
    OnDeleteDashboardSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDashboard($owner: String!) {
        onDeleteDashboard(owner: $owner) {
          __typename
          id
          name
          owner
          desc
          charts {
            __typename
            items {
              __typename
              id
              name
              type
              category
              dataset1
              field1
              dataset2
              field2
              dashboard {
                __typename
                id
                name
                owner
                desc
                charts {
                  __typename
                  nextToken
                }
                tags
              }
            }
            nextToken
          }
          tags
        }
      }`
    )
  ) as Observable<OnDeleteDashboardSubscription>;

  OnCreateChartListener: Observable<OnCreateChartSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateChart {
        onCreateChart {
          __typename
          id
          name
          type
          category
          dataset1
          field1
          dataset2
          field2
          dashboard {
            __typename
            id
            name
            owner
            desc
            charts {
              __typename
              items {
                __typename
                id
                name
                type
                category
                dataset1
                field1
                dataset2
                field2
                dashboard {
                  __typename
                  id
                  name
                  owner
                  desc
                  tags
                }
              }
              nextToken
            }
            tags
          }
        }
      }`
    )
  ) as Observable<OnCreateChartSubscription>;

  OnUpdateChartListener: Observable<OnUpdateChartSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateChart {
        onUpdateChart {
          __typename
          id
          name
          type
          category
          dataset1
          field1
          dataset2
          field2
          dashboard {
            __typename
            id
            name
            owner
            desc
            charts {
              __typename
              items {
                __typename
                id
                name
                type
                category
                dataset1
                field1
                dataset2
                field2
                dashboard {
                  __typename
                  id
                  name
                  owner
                  desc
                  tags
                }
              }
              nextToken
            }
            tags
          }
        }
      }`
    )
  ) as Observable<OnUpdateChartSubscription>;

  OnDeleteChartListener: Observable<OnDeleteChartSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteChart {
        onDeleteChart {
          __typename
          id
          name
          type
          category
          dataset1
          field1
          dataset2
          field2
          dashboard {
            __typename
            id
            name
            owner
            desc
            charts {
              __typename
              items {
                __typename
                id
                name
                type
                category
                dataset1
                field1
                dataset2
                field2
                dashboard {
                  __typename
                  id
                  name
                  owner
                  desc
                  tags
                }
              }
              nextToken
            }
            tags
          }
        }
      }`
    )
  ) as Observable<OnDeleteChartSubscription>;

  OnUpdateDatasetListener: Observable<
    OnUpdateDatasetSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDataset {
        onUpdateDataset {
          __typename
          id
          name
          desc
          api_url
          parent_url
          type
          fields {
            __typename
            items {
              __typename
              id
              name
              normalized_name
              alias
              type
              dataset {
                __typename
                id
                name
                desc
                api_url
                parent_url
                type
                fields {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateDatasetSubscription>;

  OnDeleteDatasetListener: Observable<
    OnDeleteDatasetSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDataset {
        onDeleteDataset {
          __typename
          id
          name
          desc
          api_url
          parent_url
          type
          fields {
            __typename
            items {
              __typename
              id
              name
              normalized_name
              alias
              type
              dataset {
                __typename
                id
                name
                desc
                api_url
                parent_url
                type
                fields {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteDatasetSubscription>;

  OnUpdateFieldListener: Observable<OnUpdateFieldSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateField {
        onUpdateField {
          __typename
          id
          name
          normalized_name
          alias
          type
          dataset {
            __typename
            id
            name
            desc
            api_url
            parent_url
            type
            fields {
              __typename
              items {
                __typename
                id
                name
                normalized_name
                alias
                type
                dataset {
                  __typename
                  id
                  name
                  desc
                  api_url
                  parent_url
                  type
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateFieldSubscription>;

  OnDeleteFieldListener: Observable<OnDeleteFieldSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteField {
        onDeleteField {
          __typename
          id
          name
          normalized_name
          alias
          type
          dataset {
            __typename
            id
            name
            desc
            api_url
            parent_url
            type
            fields {
              __typename
              items {
                __typename
                id
                name
                normalized_name
                alias
                type
                dataset {
                  __typename
                  id
                  name
                  desc
                  api_url
                  parent_url
                  type
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteFieldSubscription>;

  OnCreatePilotListener: Observable<OnCreatePilotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePilot {
        onCreatePilot {
          __typename
          id
          name
          description
          objective {
            __typename
            items {
              __typename
              id
              pilot {
                __typename
                id
                name
                description
                objective {
                  __typename
                  nextToken
                }
                budget
                stakeholders
                start
                end
                contact
              }
              content
              state
            }
            nextToken
          }
          budget
          stakeholders
          start
          end
          contact
        }
      }`
    )
  ) as Observable<OnCreatePilotSubscription>;

  OnUpdatePilotListener: Observable<OnUpdatePilotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePilot {
        onUpdatePilot {
          __typename
          id
          name
          description
          objective {
            __typename
            items {
              __typename
              id
              pilot {
                __typename
                id
                name
                description
                objective {
                  __typename
                  nextToken
                }
                budget
                stakeholders
                start
                end
                contact
              }
              content
              state
            }
            nextToken
          }
          budget
          stakeholders
          start
          end
          contact
        }
      }`
    )
  ) as Observable<OnUpdatePilotSubscription>;

  OnDeletePilotListener: Observable<OnDeletePilotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePilot {
        onDeletePilot {
          __typename
          id
          name
          description
          objective {
            __typename
            items {
              __typename
              id
              pilot {
                __typename
                id
                name
                description
                objective {
                  __typename
                  nextToken
                }
                budget
                stakeholders
                start
                end
                contact
              }
              content
              state
            }
            nextToken
          }
          budget
          stakeholders
          start
          end
          contact
        }
      }`
    )
  ) as Observable<OnDeletePilotSubscription>;

  OnCreateObjectiveListener: Observable<
    OnCreateObjectiveSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateObjective {
        onCreateObjective {
          __typename
          id
          pilot {
            __typename
            id
            name
            description
            objective {
              __typename
              items {
                __typename
                id
                pilot {
                  __typename
                  id
                  name
                  description
                  budget
                  stakeholders
                  start
                  end
                  contact
                }
                content
                state
              }
              nextToken
            }
            budget
            stakeholders
            start
            end
            contact
          }
          content
          state
        }
      }`
    )
  ) as Observable<OnCreateObjectiveSubscription>;

  OnUpdateObjectiveListener: Observable<
    OnUpdateObjectiveSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateObjective {
        onUpdateObjective {
          __typename
          id
          pilot {
            __typename
            id
            name
            description
            objective {
              __typename
              items {
                __typename
                id
                pilot {
                  __typename
                  id
                  name
                  description
                  budget
                  stakeholders
                  start
                  end
                  contact
                }
                content
                state
              }
              nextToken
            }
            budget
            stakeholders
            start
            end
            contact
          }
          content
          state
        }
      }`
    )
  ) as Observable<OnUpdateObjectiveSubscription>;

  OnDeleteObjectiveListener: Observable<
    OnDeleteObjectiveSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteObjective {
        onDeleteObjective {
          __typename
          id
          pilot {
            __typename
            id
            name
            description
            objective {
              __typename
              items {
                __typename
                id
                pilot {
                  __typename
                  id
                  name
                  description
                  budget
                  stakeholders
                  start
                  end
                  contact
                }
                content
                state
              }
              nextToken
            }
            budget
            stakeholders
            start
            end
            contact
          }
          content
          state
        }
      }`
    )
  ) as Observable<OnDeleteObjectiveSubscription>;

  OnCreateDatasetListener: Observable<
    OnCreateDatasetSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDataset {
        onCreateDataset {
          __typename
          id
          name
          desc
          api_url
          parent_url
          type
          fields {
            __typename
            items {
              __typename
              id
              name
              normalized_name
              alias
              type
              dataset {
                __typename
                id
                name
                desc
                api_url
                parent_url
                type
                fields {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateDatasetSubscription>;

  OnCreateFieldListener: Observable<OnCreateFieldSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateField {
        onCreateField {
          __typename
          id
          name
          normalized_name
          alias
          type
          dataset {
            __typename
            id
            name
            desc
            api_url
            parent_url
            type
            fields {
              __typename
              items {
                __typename
                id
                name
                normalized_name
                alias
                type
                dataset {
                  __typename
                  id
                  name
                  desc
                  api_url
                  parent_url
                  type
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateFieldSubscription>;
}
