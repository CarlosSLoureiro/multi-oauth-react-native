import { Platform } from "react-native";
import { IScrollViewProps } from "native-base";
import { IViewProps } from "native-base/lib/typescript/components/basic/View/types";

export const outerViewProps: IViewProps = {
  _dark: { bg: `blueGray.900` },
  _light: { bg: `blueGray.50` },
  ...(Platform.OS === `ios` && {
    paddingTop: `40px`,
  }),
  ...(Platform.OS === `web` && {
    display: `contents`
  })
};

export const viewProps: IViewProps | IScrollViewProps = {
  _dark: { bg: `blueGray.900` },
  _light: { bg: `blueGray.50` },
  width: `100%`,
  height: `100%`,
  ...(Platform.OS === `web` && {
    paddingBottom: `20vh`
  }),
};