import { ApiCodeItem } from "./base";
import { ApiImage } from "./common";

export interface ApiMyInformation {
  uuid: string;
  login_id: string;
  client: ApiCodeItem;
  type: ApiCodeItem;
  level: ApiCodeItem;
  status: ApiCodeItem;
  name: string;
  address: {
    zipcode: string;
    step1: string;
    step2: string;
  };
  email: {
    full_email: string;
    gubun1: {
      step1: string;
      step2: string;
    };
    gubun2: {
      step1: string;
      step2: string;
    };
  };
  phone_number: {
    step1: string;
    step2: string;
    step3: string;
  };
}

export interface ApiOrderInformation {
  uuid: string;
  state: ApiCodeItem;
  order_name: string;
  order_price: { number: number; string: string };
  created_at: { type1: string; type2: string; type3: string };
  rep_image: ApiImage;
}
