export interface Category {
  uuid: string;
  name: string;
}

interface CodeItem {
  codeId: string;
  codeName: string;
}

interface Codes {
  codeName: { [key: string]: string };
  codeGroup: { [key: string]: CodeItem[] };
}

export interface AppBase {
  codes: Codes;
  productCategory: Category[];
}
