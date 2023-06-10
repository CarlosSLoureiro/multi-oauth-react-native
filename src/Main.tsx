import { useContext, useEffect } from "react";
import { Platform } from 'react-native';
import { extendTheme, useColorMode } from "native-base";

import AppContext from "@contexts/AppContext";

import MobileScreens from "@components/Main/MobileScreens";
import WebRoutes from "@components/Main/WebRoutes";

import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const { setColorMode } = useColorMode();
  const { addAlert, user, updateUser, externalData } = useContext(AppContext);

  useEffect(() => {
    console.log(`User ->`, user);
  }, [user]);

  useEffect(() => {
    if (externalData.error) {
      addAlert({status: `error`, message: externalData.error });
    } else if (externalData.action === `auth`) {
      updateUser(externalData.data);
    }
  }, [externalData]);

  useEffect(() => {
    void (async () => {
      const colorMode = await AsyncStorage.getItem(`APP_COLOR_MODE`);
      if (colorMode !== null && [`light`, `dark`].includes(colorMode)) {
        setColorMode(colorMode);
      } else {
        await AsyncStorage.removeItem(`APP_COLOR_MODE`);
      }
    })();
  }, []);

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
