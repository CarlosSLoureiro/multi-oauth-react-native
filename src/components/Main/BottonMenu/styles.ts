import { ColorValue, Platform } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { IBoxProps } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

export const boxProps: IBoxProps = {
  flex: 1,
  _dark: { bg: `blueGray.900` },
  _light: { bg: `blueGray.50` },
  position: `absolute`,
  safeAreaTop: true,
  width: `100%`,
  bottom: (Platform.OS !== `web`) ? 0 : 5
};

export const hStackProps: IHStackProps = {
  bg: `#302442`,
  alignItems: `center`,
  safeAreaBottom: true,
  shadow: 6,
  alignSelf: `center`,
  paddingLeft: 50,
  paddingRight: 50,
  ...(Platform.OS === `android` && {
    paddingBottom: 5
  }),
  ...(Platform.OS === `web` && {
    width: `400px`,
    borderRadius: 50
  })
};


if (Platform.OS === `android`) {
  NavigationBar.setBackgroundColorAsync(hStackProps.bg as ColorValue);
}