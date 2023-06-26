import make from "@remote/make";

import { ResponseActivityData } from "./types";

export default async function ListActivitiesRequest(token: string | undefined, page: number): Promise<ResponseActivityData> {
  const response = await make(`GET`, `/activities/list/${page}`, token);
  return await response.json();
}

