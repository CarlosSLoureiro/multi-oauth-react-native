import { ErrorResponseData } from "@remote/types";

export interface ResponseActivityModel {
  id: number;
  message: string;
  date: string;
  user: {
    name: string;
    picture: string;
  };
}

export type ResponseActivityData = ResponseActivityModel[] & ErrorResponseData;
