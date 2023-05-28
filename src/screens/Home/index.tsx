import { View } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { Box, Button, Center, Heading, HStack, Link, Text, VStack } from "native-base";

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
  return (
    <Center _dark={{ bg: `blueGray.900` }} _light={{ bg: `blueGray.50` }} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <View style={{ flex: 1, alignItems: `center`, justifyContent: `center` }}>
          <NativeBaseIcon />
          <Heading size="lg">Hello Carlos!</Heading>
          <HStack space={2} alignItems="center">
            <Text>Welcome to NativeBase.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={`xl`}>Learn NativeBase</Text>
          </Link>
          <LoginButton />
          <DarkModeSwitch />
        </View>
      </VStack>
    </Center>
  );
}