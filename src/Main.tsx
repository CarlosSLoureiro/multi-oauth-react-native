import { useContext } from "react";
import { Center, extendTheme, VStack } from "native-base";

import { AppContext } from "@contexts/AppContext";

import BottonMenu from "@components/Main/BottonMenu";
import HomeScreen from "@screens/Home";

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

export default function App() {
  const { externalData } = useContext(AppContext);

  console.log(`External Data -> `, externalData);

  return (
    <>
      <Center
        _dark={{ bg: `blueGray.900` }}
        _light={{ bg: `blueGray.50` }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <HomeScreen />
        </VStack>
        <BottonMenu />
      </Center>
    </>
  );
}
