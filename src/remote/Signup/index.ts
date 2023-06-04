import make from "@remote/make";

import { RequestSignupData, ResponseSignupData } from "./types";

export default async function SignupRequest(data: RequestSignupData): Promise<ResponseSignupData> {
  const response = await make(`/user/create`, data);
  return await response.json();
}

