"use server";

import { AppBase } from "@/types/api/base";
import Fetch from "../fetch";

export default async function GetBase(): Promise<AppBase> {
  return Fetch<AppBase>("/api/system/base-data", {});
}
