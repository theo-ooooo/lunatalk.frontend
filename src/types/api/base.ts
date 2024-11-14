export interface ApiCodeItem {
  code_id: string;
  code_name: string;
}

export interface ApiCodes {
  code_name: { [key: string]: string };
  code_group: {
    [key: string]: ApiCodeItem[];
  };
}

export interface ApiCategory {
  uuid: string;
  name: string;
}

export interface ApiAppBase {
  codes: ApiCodes;
  product_category: ApiCategory[];
}
