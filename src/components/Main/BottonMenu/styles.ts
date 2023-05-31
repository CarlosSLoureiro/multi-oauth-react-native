import { ColorValue, Platform } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { IBoxProps, IIconProps, ITextProps } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

export const boxProps: IBoxProps = {
  _dark: { bg: `blueGray.900` },
  _light: { bg: `blueGray.50` },
  backgroundColor: `transparent`,
  width: `100%`,
  _web: {
    position: `fixed`,
    bottom: 5,
  }
};

export const hStackProps: IHStackProps = {
  _light: {
    bg: `#fff`
  },
  _dark: {
    bg: `#000`
  },
  alignItems: `center`,
  shadow: 6,
  alignSelf: `center`,
  paddingLeft: 45,
  paddingRight: 45,
  _android: {
    paddingBottom: 5
  },
  _ios: {
    paddingBottom: 8
  },
  _web: {
    paddingBottom: 0,
    width: 400,
    borderRadius: 50
  }
};

export const iconProps: IIconProps = {
  _light: {
    color: `#000`
  },
  _dark: {
    color: `#fff`
  },
  mb: `1`,
  size: `lg`
};

export const textProps: ITextProps = {
  _light: {
    color: `#000`
  },
  _dark: {
    color: `#fff`
  },
  fontSize: `12`
};


if (Platform.OS === `android`) {
  NavigationBar.setBackgroundColorAsync(hStackProps.bg as ColorValue);
}