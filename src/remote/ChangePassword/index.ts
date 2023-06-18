import make from "@remote/make";

import { RequestChangePasswordData, ResponseChangePasswordData } from "./types";

export default async function ChangePasswordRequest(token: string | undefined, data: RequestChangePasswordData): Promise<ResponseChangePasswordData> {
  const response = await make(`PATCH`, `/user/password`, token, data);
  return await response.json();
}

