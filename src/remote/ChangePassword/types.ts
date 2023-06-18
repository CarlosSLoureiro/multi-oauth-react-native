import { UserInterface } from "@contexts/AppContext/types";

import { ErrorResponseData } from "@remote/types";

export interface RequestChangePasswordData {
  currentPassword?: string;
  newPassword: string;
  confirmPassword: string;
}

export type SuccessResponseChangePasswordData = Pick<UserInterface, "token">;

export type ResponseChangePasswordData = SuccessResponseChangePasswordData & ErrorResponseData;
