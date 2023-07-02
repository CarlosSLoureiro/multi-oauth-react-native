import { ReactElement } from "react";

import { AppContextInterface } from "@contexts/AppContext/types";

export interface TestContextProps {
  appContext?: Partial<AppContextInterface>;
  children: ReactElement | ReactElement[];
}