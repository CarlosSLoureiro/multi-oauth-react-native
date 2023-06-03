import { ComponentType } from "react";

import { AlertProps } from "@components/Main/Alert/types";

export interface UserInterface {
  id: number;
  name: string;
}

export interface ScreenInterface {
  name: string;
  route: string;
  screen: ComponentType;
  requireUser?: boolean;
}

export interface AppContextInterface {
  externalData: object;
  user?: UserInterface;
  setUser: (user: UserInterface) => void;
  currentScreen: ScreenInterface;
  setScreen: (name: string) => void;
  addAlert: (name: Omit<AlertProps, "open" | "setAlert">, timeout?: number) => void;
}