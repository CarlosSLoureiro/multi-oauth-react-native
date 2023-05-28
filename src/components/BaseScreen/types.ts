import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface BaseScreenProps {
  scrollable?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactElement | ReactElement[];
}