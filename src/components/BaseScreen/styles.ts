import { Platform } from "react-native";
import { IScrollViewProps } from "native-base";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";

export const viewProps: IViewProps | IScrollViewProps = {
  width: `100%`,
  height: `100%`,
  _dark: { bg: `blueGray.900` },
  _light: { bg: `blueGray.50` },
  ...(Platform.OS === `web` && {
    paddingBottom: `20vh`
  })
};