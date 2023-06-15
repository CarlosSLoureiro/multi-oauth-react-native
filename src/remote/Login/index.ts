import make from "@remote/make";

import { RequestLoginData, ResponseLoginData } from "./types";

export default async function LoginRequest(data: RequestLoginData): Promise<ResponseLoginData> {
  const response = await make(`POST`, `/auth`, undefined, data);
  return await response.json();
}

