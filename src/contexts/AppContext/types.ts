import { ComponentType, MutableRefObject } from "react";
import { Location, NavigateFunction } from "react-router-dom";

import { AlertProps } from "@components/Main/Alert/types";

import { NavigationContainerRefWithCurrent } from "@react-navigation/native";

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

export type AppNavigation = (screen: ScreenInterface) => void;

export interface AppContextInterface {
  externalData: ExternalDataInterface;
  user?: UserInterface;
  updateUser: (user?: UserInterface) => void;
  setScreen: (name: string) => void;
  addAlert: (name: Omit<AlertProps, "open" | "setAlert">, timeout?: number) => void;
  appNavigation: MutableRefObject<AppNavigation | undefined>;
  activeScreen: MutableRefObject<ScreenInterface>;
}