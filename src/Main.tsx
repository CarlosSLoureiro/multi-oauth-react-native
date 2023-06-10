import { useContext, useEffect } from "react";
import { Platform } from 'react-native';
import { extendTheme } from "native-base";

import AppContext from "@contexts/AppContext";
import { UserInterface } from "@contexts/AppContext/types";

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
