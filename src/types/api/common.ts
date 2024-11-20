export interface Response<T> {
  message?: string;
  error_message?: string;
  result: T;
}

export interface ApiProduct {
  badge: string[];
  color: {
    id: number;
    name: string;
  }[];
  name: string;
  original_price: {
    number: number;
    string: string;
  };
  price: {
    number: number;
    string: string;
  };
  rep_image: {
    file_name: string;
    url: string;
  };
  review_count: {
    number: number;
    string: string;
  };
  uuid: string;
}
