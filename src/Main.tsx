import { ComponentType, useContext } from "react";
import { Platform } from 'react-native';
import { extendTheme } from "native-base";

import { AppContext } from "@contexts/AppContext";

import BottonMenu from "@components/Main/BottonMenu";

// import HomeScreen as HomeScreen2 from "@screens/Home";
import WebRoutes from "@components/Main/WebRoutes";
import MobileScreens from "@components/Main/MobileScreens";
import GenericHomeScreen from "@screens/GenericHomeScreen";
import GenericSettingsScreen from "@screens/GenericSettingsScreen";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: `dark`,
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;

declare module "native-base" {
  type ICustomTheme = MyThemeType;
}

export interface ScreensConfig {
  name: string;
  route: string;
  screen: ComponentType;
}

// Define screens name and routes
const screens: ScreensConfig[] = [
  {
    name: `Home`,
    route: `/`,
    screen: GenericHomeScreen
  },
  {
    name: `Settings`,
    route: `/settings`,
    screen: GenericSettingsScreen
  },
];

export default function App() {
  const { externalData } = useContext(AppContext);

  console.log(`External Data -> `, externalData);

  return (
    <>
      {Platform.OS === `web` ? (
        <WebRoutes screens={screens} />
      ) : (
        <MobileScreens screens={screens} />
      )}
    </>
  );
}
