import make from "@remote/make";

import { RequestLoginData, ResponseLoginData } from "./types";

export default async function LoginRequest(data: RequestLoginData): Promise<ResponseLoginData> {
  const response = await make(`/auth`, data);
  return await response.json();
}

