import { Dimensions, Platform } from "react-native";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";

export const viewStyle: IViewProps = {
  shadow: 3,
  borderRadius: 8,
};

export const containerStyle = {
  padding: 12,
  alignItems: `center`,
  borderRadius: viewStyle.borderRadius as number,
  width: Platform.OS !== `web` ? Dimensions.get(`window`).width * 0.9 : `40vw`,
  ...(Platform.OS === `web` && {
    minWidth: `400px`
  }),
};