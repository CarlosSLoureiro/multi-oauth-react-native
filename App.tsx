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
import CryptoJS from "react-native-crypto-js";
import QueryString from 'query-string';


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
  /* deep link */
  const redirectUrl = Linking.createURL('path/into/app', {
    queryParams: { hello: 'world' },
  }); // must remove

  const executeExternalData = (value: string) => {
    const data = decryptExternalData(value);
    
    if (data) {
      console.log('received data ->', data);
    }
  }

  const decryptExternalData = (value: string): object | undefined => {
    const searchParams = QueryString.parse(value);
    const data = searchParams.data ? String(searchParams.data) : null;
    
    let dataDecrypted;

    if (data) {
      const decrypted = CryptoJS.AES.decrypt(decodeURIComponent(data), 'CARLOS LOUREIRO').toString(CryptoJS.enc.Utf8);
      try {
        dataDecrypted = JSON.parse(decrypted);
      } catch (e) {
      }
    }

    return dataDecrypted;
  }

  useEffect(() => {
    if (["ios", "android"].includes(Platform.OS)) {
      Linking.addEventListener('url', ({ url }) => {
        const match = url.match(/\/\?(.*)/);
        const query = match && match[1];
       
        if (query) {
          executeExternalData(query);
        }
      });
    } else {
      executeExternalData(window.location.search);
    }
  }, []);



  const LoginButton = () => {
    return <Box alignItems="center">
        <Button onPress={() => {
          Linking.openURL('http://api-multi-oauth2-react-native.carlosloureiro.xyz/auth/google');
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
