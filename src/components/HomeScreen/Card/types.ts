import { ReactElement } from "react";

export interface CardProps {
  children: ReactElement | ReactElement[];
  position?: number;
}