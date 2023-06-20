import { API_URL } from '@env';

import { useContext } from 'react';
import { Platform } from 'react-native';
import Constants from "expo-constants";
import * as Linking from 'expo-linking';
import { Button, HStack, Text, useColorModeValue } from "native-base";

import AppContext from '@contexts/AppContext';

import encryptExternalData from "@utils/data-manager/encrypt";

import { OAuth2LoginButtonProps } from "./types";

import QueryString from 'query-string';

export default function OAuth2LoginButton ({icon, title, endpoint}: OAuth2LoginButtonProps) {
  const { currentScreen } = useContext(AppContext);

  const onPress = async () => {
    const params = {
      'isDevelopment': __DEV__,
      'debuggerHost': Constants.manifest?.debuggerHost,
      'webScreenRoute': Platform.OS === `web` ? currentScreen.route : undefined
    };

    const query = QueryString.stringify({
      data: encryptExternalData(params)
    });

    const url = `${API_URL}${endpoint}?${query}`;

    await Linking.openURL(url);
  };

  return (
    <Button
      mt="2"
      backgroundColor="transparent"
      borderColor={useColorModeValue(`Light`, `Dark`) === `Light` ? `#000000` : `#797979`}
      borderWidth={1}
      onPress={onPress}
    >
      <HStack>
        { icon }
        <Text paddingLeft={5}>{ title }</Text>
      </HStack>
    </Button>
  );
}