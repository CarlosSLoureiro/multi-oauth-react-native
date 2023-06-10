import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface BaseScreenProps {
  style?: StyleProp<ViewStyle>;
  children: ReactElement | ReactElement[];
}