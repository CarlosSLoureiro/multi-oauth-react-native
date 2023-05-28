import { ColorValue, Platform } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { IBoxProps } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

export const boxProps: IBoxProps = {
  _dark: { bg: `blueGray.900` },
  _light: { bg: `blueGray.50` },
  backgroundColor: `transparent`,
  width: `100%`,
  ...(Platform.OS === `web` && {
    position: `fixed`,
    bottom: 5,
  })
};

export const hStackProps: IHStackProps = {
  bg: `#302442`,
  alignItems: `center`,
  shadow: 6,
  alignSelf: `center`,
  paddingLeft: 50,
  paddingRight: 50,
  ...(Platform.OS !== `web` && {
    paddingBottom: 5
  }),
  ...(Platform.OS === `web` && {
    width: 400,
    borderRadius: 50
  })
};


if (Platform.OS === `android`) {
  NavigationBar.setBackgroundColorAsync(hStackProps.bg as ColorValue);
}