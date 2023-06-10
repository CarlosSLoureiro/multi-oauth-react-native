import { useEffect } from "react";
import { Platform } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import { Heading, HStack, Switch, Text, Tooltip, useColorMode } from "native-base";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DarkModeSwitch() {
  const { colorMode, setColorMode } = useColorMode();

  const toggleColorMode = () => {
    void (async () => {
      const newColorMode = (colorMode === `light`) ? `dark` : `light`;
      setColorMode(newColorMode);
      await AsyncStorage.setItem(`APP_COLOR_MODE`, newColorMode);
    })();
  };

  useEffect(() => {
    if (Platform.OS === `android`) {
      void NavigationBar.setBackgroundColorAsync(colorMode === `light` ? `white` : `black`);
    }
  }, [colorMode]);
  return (
    <>
      <Heading size="sm" style={{ marginTop: 20, paddingBottom: 10 }}>
        How do you prefer?
      </Heading>
      <HStack space={2} alignItems="center">
        <Text>Light</Text>
        <Tooltip label={
          colorMode === `light` ? `Switch to Dark Mode` : `Switch to Light Mode`
        }>
          <Switch
            isChecked={colorMode === `dark`}
            onToggle={toggleColorMode}
          />
        </Tooltip>
        <Text>Dark</Text>
      </HStack>
    </>
  );
}
