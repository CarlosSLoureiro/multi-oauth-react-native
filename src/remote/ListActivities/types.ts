import { UserInterface } from "@contexts/AppContext/types";

import { ErrorResponseData } from "@remote/types";

export interface ResponseActivityModel {
  id: number;
  message: string;
  date: string;
  user: Pick<UserInterface, "name" | "picture">;
}

export type ResponseActivityData = ResponseActivityModel[] & ErrorResponseData;
