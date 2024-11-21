import { ApiMyInformation, ApiOrderInformation } from "@/types/api/my";
import { MyInformation, MyOrderInformation } from "@/types/processed/my";
import dayjs from "dayjs";

export function ConvertMyInformation(data: ApiMyInformation): MyInformation {
  return {
    uuid: data.uuid,
    loginId: data.login_id,
    name: data.name,
    email: data.email.full_email,
  };
}

export function ConvertMyOrderInformation(
  order: ApiOrderInformation
): MyOrderInformation {
  return {
    uuid: order.uuid,
    state: order.state.code_name,
    imageUrl: order.rep_image?.url,
    orderName: order.order_name,
    orderPrice: order.order_price.number,
    createdAt: dayjs(order.created_at.type1).format("YY.MM.DD"),
  };
}
