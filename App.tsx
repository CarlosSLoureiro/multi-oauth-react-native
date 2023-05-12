import React, { useEffect, useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import * as Linking from 'expo-linking';
import CryptoJS from "crypto-js";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  const web = !["ios", "android"].includes(Platform.OS);

  /* deep link */
  const redirectUrl = Linking.createURL('path/into/app', {
    queryParams: { hello: 'world' },
  });

  const handleOpenURL = ({ url }) => {
    console.log('from deep link -> ', url);
  };

  useEffect(() => {
    Linking.addEventListener('url', handleOpenURL);

    if (web) {
      const searchParams = new URLSearchParams(window.location.search);
      const login = searchParams.get('login') || "";

      const decrypted = CryptoJS.AES.decrypt(decodeURIComponent(login), `CARLOS LOUREIRO`).toString(CryptoJS.enc.Utf8);

      console.log('login ->', decrypted);
    }
  }, []);



  const LoginButton = () => {
    return <Box alignItems="center">
        <Button onPress={() => {
          const url = web ? 'http://api-multi-oauth2-react-native.carlosloureiro.xyz/auth/google' : 'http://api-multi-oauth2-react-native.carlosloureiro.xyz/auth/google';
          Linking.openURL(url);
          /*
          Linking.canOpenURL(redirectUrl).then(supported => {
            if (supported) {
              Linking.openURL(redirectUrl);
            } else {
              console.log('nao suportado');
            }
          });
          */
        }}>Login</Button>
      </Box>;
  };

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              _web={{
                _text: {
                  fontFamily: "monospace",
                  fontSize: "sm",
                },
              }}
              px={2}
              py={1}
              _dark={{ bg: "blueGray.800" }}
              _light={{ bg: "blueGray.200" }}
            >
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link>
          <LoginButton />
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
