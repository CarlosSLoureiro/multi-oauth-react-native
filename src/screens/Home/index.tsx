import { useContext,useEffect,useState } from 'react';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { Box, Button, Center, Divider, Heading, HStack, Link, Text, Tooltip } from "native-base";

import AppContext from '@contexts/AppContext';

import BaseScreen from '@components/BaseScreen';
import Card from '@components/HomeScreen/Card';
import DarkModeSwitch from "@components/HomeScreen/DarkModeSwitch";
import ExpoIcon from '@components/HomeScreen/ExpoIcon';
import Header from '@components/HomeScreen/Header';
import NativeBaseIcon from '@components/HomeScreen/NativeBaseIcon';

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
        <Header>
          <Heading size="lg">{message}</Heading>
          <Heading size="xs" style={{ paddingBottom: 10 }}>
            Welcome to Multi OAuth2 Example App
          </Heading>
        </Header>
        <Divider my={5} />
        <Center style={{
          display: `flex`,
          flexDirection: `row`,
          gap: 25
        }}>
          <Card position={1}>
            <Center w="150" h="110" mt="7" _dark={{ bg: `coolGray.500` }} _light={{ bg: `coolGray.200` }} rounded="md">
              <HStack space={0} flex={1} flexDirection="column" justifyContent="center" alignItems="center">
                <Text paddingTop={2} textAlign="center">This app has been made with <Text bold>Expo</Text> + <Text bold>Native Base</Text></Text>
                <HStack space={2} flex={1} flexDirection="row" alignItems="center">
                  <ExpoIcon size='25px' />
                  <Tooltip label="Learn NativeBase" openDelay={500}>
                    <Link href="https://docs.nativebase.io" isExternal>
                      <NativeBaseIcon size='25px' />
                    </Link>
                  </Tooltip>
                </HStack>
              </HStack>
            </Center>
          </Card>
          <Card position={2}>
            <Center w="150" h="110" mt="7" _dark={{ bg: `coolGray.500` }} _light={{ bg: `coolGray.200` }} rounded="md">
              <HStack space={0} flex={1} flexDirection="column" justifyContent="center" alignItems="center">
                <Text paddingTop={2} textAlign="center">This app has been made with <Text bold>Expo</Text> + <Text bold>Native Base</Text></Text>
                <HStack space={2} flex={1} flexDirection="row" alignItems="center">
                  <ExpoIcon size='25px' />
                  <Link href="https://docs.nativebase.io" isExternal>
                    <NativeBaseIcon size='25px' />
                  </Link>
                </HStack>
              </HStack>
            </Center>
          </Card>
        </Center>
        <Divider my={5} />
        <LoginButton />
        <DarkModeSwitch />
      </Center>
    </BaseScreen>
  );
}