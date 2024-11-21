export interface MyInformation {
  uuid: string;
  loginId: string;
  name: string;
  email: string;
}

export interface MyOrderInformation {
  uuid: string;
  state: string;
  orderName: string;
  orderPrice: number;
  createdAt: string;
  imageUrl: string;
}
