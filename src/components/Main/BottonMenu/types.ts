import { ReactElement } from "react";

export interface MenuItemsInterface {
  name: string;
  icon: ReactElement;
  iconSelected?: ReactElement;
  action: () => void;
}