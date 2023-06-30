import { Dispatch, ReactNode, SetStateAction } from "react";

export interface MenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface MenuItems {
  title: string;
  icon: ReactNode;
  onPress?: () => void;
}
