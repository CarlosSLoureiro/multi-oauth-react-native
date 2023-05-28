import { useContext,useEffect, useState } from 'react';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { Box, Button, Center, Divider, Heading, Hidden, HStack, Link, Spacer, Text } from "native-base";

import AppContext from '@contexts/AppContext';

import BaseScreen from '@components/BaseScreen';
import DarkModeSwitch from "@components/HomeScreen/DarkModeSwitch";
import NativeBaseIcon from "@components/HomeScreen/NativeBaseIcon";

import encryptExternalData from "@utils/data-manager/encrypt";

import QueryString from 'query-string';


const LoginButton = () => {
  return <Box alignItems="center">
    <Button onPress={async () => {
      const api = `http://api-multi-oauth2-react-native-test.carlosloureiro.xyz`;
      const params = {
        'isDevelopment': __DEV__,
        'debuggerHost': Constants.manifest?.debuggerHost,
      };

      const query = QueryString.stringify({
        data: encryptExternalData(params)
      });

      const url = `${api}/auth/google?${query}`;

      await Linking.openURL(url);
    }}>Login</Button>
  </Box>;
};


export default function HomeScreen() {
  const [message, setMessage] = useState<string>(`Hey there!`);

  const { user } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      setMessage(`Hello ${user.name.split(` `)[0]}!`);
    }
  }, [user]);

  return (
    <BaseScreen>
      <Center style={{
        flex: 1,
        alignItems: `center`
      }}>
        <Heading size="xl">{message}</Heading>
        <Heading size="sm" style={{paddingBottom: 10}}>Welcome to Multi OAuth2 Example App</Heading>
        <Divider my={5} />
        <NativeBaseIcon size={50} />
        <HStack space={2} alignItems="center">
          <Text>This app has been made with <Text bold>Expo</Text> + <Text bold>Native Base</Text></Text>
        </HStack>
        <Link href="https://docs.nativebase.io" isExternal>
          <Text color="primary.500" underline fontSize={`xl`}>Learn NativeBase</Text>
        </Link>
        <Divider my={5} />
        <LoginButton />
        <DarkModeSwitch />
      </Center>
    </BaseScreen>
  );
}