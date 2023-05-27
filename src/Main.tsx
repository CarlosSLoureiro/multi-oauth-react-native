import { useContext, useEffect } from "react";
import { Platform } from 'react-native';
import { extendTheme } from "native-base";

import AppContext from "@contexts/AppContext";

import MobileScreens from "@components/Main/MobileScreens";
import WebRoutes from "@components/Main/WebRoutes";

const config = {
  useSystemColorMode: false,
  initialColorMode: `dark`,
};

export const theme = extendTheme({ config });
type MyThemeType = typeof theme;

declare module "native-base" {
  type ICustomTheme = MyThemeType;
}

export default function App() {
  const { externalData, user } = useContext(AppContext);

  useEffect(() => {
    console.log(`External Data -> `, externalData);
    console.log(`User -> `, user);
  }, [user]);

  return (
    <>
      {Platform.OS === `web` ? (
        <WebRoutes />
      ) : (
        <MobileScreens />
      )}
    </>
  );
}
