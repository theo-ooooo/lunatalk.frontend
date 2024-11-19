import { ApiMyInformation } from "@/types/api/my";
import { MyInformation } from "@/types/processed/my";

export function ConvertMyInformation(data: ApiMyInformation): MyInformation {
  return {
    uuid: data.uuid,
    loginId: data.login_id,
    name: data.name,
    email: data.email.full_email,
  };
}
