import { UserInterface } from "@contexts/AppContext/types";

import { ErrorResponseData } from "@remote/types";

export interface RequestLoginData {
  email: string;
  password: string;
}

export type SuccessResponseLoginData = UserInterface;

export type ResponseLoginData = SuccessResponseLoginData & ErrorResponseData;
