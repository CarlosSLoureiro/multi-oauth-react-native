import { UserInterface } from "@contexts/AppContext/types";

import { ErrorResponseData } from "@remote/types";

export type SuccessResponseAuthCheckData = Omit<UserInterface, "token">;

export type ResponseAuthCheckData = SuccessResponseAuthCheckData & ErrorResponseData;
