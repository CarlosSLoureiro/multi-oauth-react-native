import { useContext,useEffect,useState } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { Center, Divider, Heading, HStack, Link, Text, Tooltip } from "native-base";

import AppContext from '@contexts/AppContext';

import BaseScreen from '@components/BaseScreen';
import Card from '@components/HomeScreen/Card';
import DarkModeSwitch from "@components/HomeScreen/DarkModeSwitch";
import Header from '@components/HomeScreen/Header';
import AndroidIcon from '@components/Icons/AndroidIcon';
import APIIcon from '@components/Icons/APIIcon';
import AppleIcon from '@components/Icons/AppleIcon';
import ExpoIcon from '@components/Icons/ExpoIcon';
import GoogleIcon from '@components/Icons/GoogleIcon';
import LinkedInIcon from '@components/Icons/LinkedInIcon';
import NativeBaseIcon from '@components/Icons/NativeBaseIcon';
import ReactIcon from '@components/Icons/ReactIcon';
import TSIcon from '@components/Icons/TSIcon';
import TwitterIcon from '@components/Icons/TwitterIcon';
import WebIcon from '@components/Icons/WebIcon';

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
            Welcome to Multi OAuth Example App { Constants.manifest?.version ?? `` }
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
                <Link href={Platform.OS === `web` ? `#` : `https://multi-oauth-react-native.carlosloureiro.xyz`}><WebIcon size='25px' /></Link>
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
                <Link href="https://github.com/CarlosSLoureiro/multi-oauth-react-native-api" isExternal>
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
            <Text paddingTop={2} paddingX={2} textAlign="center">OAuth support to <Text bold>Google</Text>, <Text bold>Twitter</Text> and others</Text>
            <HStack space={2} flex={1} flexDirection="row" alignItems="center">
              <Tooltip label="Google">
                <Link href="https://www.google.com/" isExternal>
                  <GoogleIcon size='21px' />
                </Link>
              </Tooltip>
              <Tooltip label="Twitter">
                <Link href="https://twitter.com/" isExternal>
                  <TwitterIcon size='30px' />
                </Link>
              </Tooltip>
            </HStack>
          </Card>
        </Center>
      </Center>
    </BaseScreen>
  );
}