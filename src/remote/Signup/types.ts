import { ErrorResponseData } from "@remote/types";

export interface RequestSignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SuccessResponseSignupData {
  id: number;
  name: string;
  email: string;
  token: string;
}

export type ResponseSignupData = SuccessResponseSignupData & ErrorResponseData;
