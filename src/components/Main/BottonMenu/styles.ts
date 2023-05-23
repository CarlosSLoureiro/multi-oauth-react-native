import { Platform } from "react-native";
import { IBoxProps } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

export const boxProps: IBoxProps = {
  flex: 1,
  _dark: { bg: `blueGray.900` },
  _light: { bg: `blueGray.50` },
  position: `absolute`,
  safeAreaTop: true,
  width: `100%`,
  bottom: [`ios`, `android`].includes(Platform.OS) ? 0 : 5
};

export const hStackProps: IHStackProps = {
  bg: `#302442`,
  alignItems: `center`,
  safeAreaBottom: true,
  shadow: 6,
  width: `400px`,
  alignSelf: `center`,
  paddingLeft: 50,
  paddingRight: 50,
  borderRadius: [`ios`, `android`].includes(Platform.OS) ? 0 : 50
};