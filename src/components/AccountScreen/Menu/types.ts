import { ReactNode } from "react";

export interface MenuItems {
  title: string;
  icon: ReactNode;
  onPress?: () => void;
}
