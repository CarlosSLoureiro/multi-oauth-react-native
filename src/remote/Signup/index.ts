import make from "@remote/make";

import { RequestSignupData, ResponseSignupData } from "./types";

export default async function SignupRequest(data: RequestSignupData): Promise<ResponseSignupData> {
  const response = await make(`POST`, `/user/create`, undefined, data);
  return await response.json();
}

