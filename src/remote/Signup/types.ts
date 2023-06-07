import { UserInterface } from "@contexts/AppContext/types";

import { ErrorResponseData } from "@remote/types";

export interface RequestSignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type SuccessResponseSignupData = UserInterface;

export type ResponseSignupData = SuccessResponseSignupData & ErrorResponseData;
