import { ComponentType } from "react";

import { AlertProps } from "@components/Main/Alert/types";

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  picture: string;
  token: string;
}

export interface ScreenInterface {
  name: string;
  route: string;
  screen: ComponentType;
  requireUser?: boolean;
  requireNotUser?: boolean;
}

export interface ExternalDataInterface {
  action?: string;
  error?: string;
  data?: UserInterface;
}

export interface AppContextInterface {
  externalData: ExternalDataInterface;
  user?: UserInterface;
  updateUser: (user?: UserInterface) => void;
  currentScreen?: ScreenInterface;
  setScreen: (name: string) => void;
  addAlert: (name: Omit<AlertProps, "open" | "setAlert">, timeout?: number) => void;
}