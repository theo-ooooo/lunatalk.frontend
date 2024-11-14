"use server";

import { ApiAppBase } from "@/types/api/base";
import Fetch from "../fetch";
import { AppBase } from "@/types/processed/base";
import { ConvertBase } from "@/convert/base";

export default async function GetBase(): Promise<AppBase> {
  try {
    const data = await Fetch<ApiAppBase>("/api/system/base-data", {});
    return ConvertBase(data);
  } catch (e) {
    throw e;
  }
}
