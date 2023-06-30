import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface BaseScreenProps {
  style?: StyleProp<ViewStyle>;
  enableScroll?: boolean;
  onScrollToEnd?: () => void;
  onFocus?: () => void;
  onUnfocus?: () => void;
  children: ReactElement | ReactElement[];
}