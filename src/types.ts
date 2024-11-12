export interface CodeItem {
  code_id: string;
  code_name: string;
}

export interface Codes {
  code_name: { [key: string]: string };
  code_group: {
    [key: string]: CodeItem[];
  };
}
export interface Categories {
  uuid: string;
  name: string;
}

export interface AppBase {
  codes: Codes;
  product_category: Categories[];
}

export interface MainProductCategory {
  name: string;
  image: {
    file_name: string;
    height: number;
    width: number;
    url: string;
  };
  uuid: string;
}

export interface Response<T> {
  message: string;
  result: T;
}
