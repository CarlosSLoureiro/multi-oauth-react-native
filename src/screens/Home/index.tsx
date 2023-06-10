import { useContext,useEffect,useState } from 'react';
import { Platform } from 'react-native';
import { Center, Divider, Heading, HStack, Link, Text, Tooltip } from "native-base";

import AppContext from '@contexts/AppContext';

import BaseScreen from '@components/BaseScreen';
import Card from '@components/HomeScreen/Card';
import DarkModeSwitch from "@components/HomeScreen/DarkModeSwitch";
import Header from '@components/HomeScreen/Header';
import AndroidIcon from '@components/HomeScreen/Icons/AndroidIcon';
import APIIcon from '@components/HomeScreen/Icons/APIIcon';
import AppleIcon from '@components/HomeScreen/Icons/AppleIcon';
import ExpoIcon from '@components/HomeScreen/Icons/ExpoIcon';
import FacebookIcon from '@components/HomeScreen/Icons/FacebookIcon';
import GoogleIcon from '@components/HomeScreen/Icons/GoogleIcon';
import NativeBaseIcon from '@components/HomeScreen/Icons/NativeBaseIcon';
import ReactIcon from '@components/HomeScreen/Icons/ReactIcon';
import TSIcon from '@components/HomeScreen/Icons/TSIcon';
import WebIcon from '@components/HomeScreen/Icons/WebIcon';

export default function HomeScreen() {
  const defaultFirstMessage = `Hey there!`;
  const [firstMessage, setFirstMessage] = useState<string>(defaultFirstMessage);

  const { user } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      setFirstMessage(`Hello ${user.name.split(` `)[0]}!`);
    } else {
      setFirstMessage(defaultFirstMessage);
    }
  }, [user]);

  return (
    <BaseScreen>
      <Center style={{
        flex: 1,
        alignItems: `center`
      }}>
        <Header>
          <Heading size="lg">{firstMessage}</Heading>
          <Heading size="xs" style={{ paddingBottom: 10 }}>
            Welcome to Multi OAuth2 Example App
          </Heading>
          <Text>
            Note that it has created with <Text bold>React Native</Text>! <Tooltip label="React Native"><Link _web={{position:`absolute`}} href="https://reactnative.dev/" isExternal><ReactIcon size="20px" color='#003cff'/></Link></Tooltip>
          </Text>
        </Header>
        <DarkModeSwitch />
        <Divider my={5} />
        <Center style={{
          display: `flex`,
          flexDirection: `row`,
          gap: 25
        }}>
          <Card position={1}>
            <Text paddingTop={2} paddingX={2} textAlign="center">This app has been made using <Text bold>Expo</Text> + <Text bold>Native Base</Text></Text>
            <HStack space={2} flex={1} flexDirection="row" alignItems="center">
              <Tooltip label="Expo">
                <Link href="https://expo.dev/" isExternal>
                  <ExpoIcon size='25px' />
                </Link>
              </Tooltip>
              <Tooltip label="NativeBase">
                <Link href="https://nativebase.io/" isExternal>
                  <NativeBaseIcon size='25px' />
                </Link>
              </Tooltip>
            </HStack>
          </Card>
          <Card position={2}>
            <Text paddingTop={2} paddingX={2} textAlign="center">Compatible with <Text bold>Android</Text>, <Text bold>iOS</Text> and also <Text bold>Web</Text></Text>
            <HStack space={2} flex={1} flexDirection="row" alignItems="center">
              <Tooltip label="Android">
                <Link href="https://www.android.com/" isExternal>
                  <AndroidIcon size='23px' />
                </Link>
              </Tooltip>
              <Tooltip label="iOS">
                <Link href="https://www.apple.com/ios" isExternal>
                  <AppleIcon size='25px' />
                </Link>
              </Tooltip>
              <Tooltip label="Web">
                <Link href={Platform.OS === `web` ? `#` : `https://multi-oauth2-react-native.carlosloureiro.xyz`}><WebIcon size='25px' /></Link>
              </Tooltip>
            </HStack>
          </Card>
        </Center>
        <Center style={{
          display: `flex`,
          flexDirection: `row`,
          gap: 25
        }}>
          <Card position={3}>
            <Text paddingTop={2} paddingX={2} textAlign="center">It is managed by a <Text bold>External API</Text> also in <Text bold>TypeScript</Text></Text>
            <HStack space={2} flex={1} flexDirection="row" alignItems="center">
              <Tooltip label="API Repository">
                <Link href="https://github.com/CarlosSLoureiro/multi-oauth2-react-native-api" isExternal>
                  <APIIcon size='25px' />
                </Link>
              </Tooltip>
              <Tooltip label="TypeScript">
                <Link href="https://www.typescriptlang.org/" isExternal>
                  <TSIcon size='25px' />
                </Link>
              </Tooltip>
            </HStack>
          </Card>
          <Card position={4}>
            <Text paddingTop={2} paddingX={2} textAlign="center">OAuth support to <Text bold>Google</Text>, <Text bold>Faceook</Text> and others</Text>
            <HStack space={2} flex={1} flexDirection="row" alignItems="center">
              <Tooltip label="Google">
                <Link href="https://www.google.com/" isExternal>
                  <GoogleIcon size='21px' />
                </Link>
              </Tooltip>
              <Tooltip label="Facebook">
                <Link href="https://www.facebook.com/" isExternal>
                  <FacebookIcon size='25px' />
                </Link>
              </Tooltip>
            </HStack>
          </Card>
        </Center>
      </Center>
    </BaseScreen>
  );
}