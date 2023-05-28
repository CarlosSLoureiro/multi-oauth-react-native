import { ComponentType } from "react";

export interface UserInterface {
  id: number;
  name: string;
}

export interface ScreenInterface {
  name: string;
  route: string;
  screen: ComponentType;
}

export interface AppContextInterface {
  externalData: object;
  user?: UserInterface;
  setUser: (user: UserInterface) => void;
  currentScreen: ScreenInterface;
  setScreen: (name: string) => void;
}