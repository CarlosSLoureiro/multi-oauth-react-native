import make from "@remote/make";

import { ResponseActivityData } from "./types";

export default async function ListActivitiesRequest(page: number): Promise<ResponseActivityData> {
  const response = await make(`GET`, `/activities/list/${page}`);
  return await response.json();
}

