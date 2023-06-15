import make from "@remote/make";

import { ResponseAuthCheckData } from "./types";

export default async function AuthCheckRequest(token: string): Promise<ResponseAuthCheckData> {
  const response = await make(`GET`, `/auth/check`, token);
  return await response.json();
}

