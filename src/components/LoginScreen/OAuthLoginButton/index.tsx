import { API_URL } from '@env';

import { useContext } from 'react';
import { Platform } from 'react-native';
import Constants from "expo-constants";
import * as Linking from 'expo-linking';
import { Button, Pressable, Tooltip, useColorModeValue } from "native-base";

import AppContext from '@contexts/AppContext';

import encryptExternalData from "@utils/data-manager/encrypt";

import { OAuthLoginButtonProps } from "./types";

import QueryString from 'query-string';

export default function OAuthLoginButton ({provider, icon}: OAuthLoginButtonProps) {
  const { currentScreen } = useContext(AppContext);

  const onPress = async () => {
    const params = {
      'isDevelopment': __DEV__,
      'debuggerHost': Platform.OS === `web` ? window.location.origin : Constants.manifest?.debuggerHost,
      'webScreenRoute': Platform.OS === `web` ? currentScreen.route : undefined
    };

    const query = QueryString.stringify({
      data: encryptExternalData(params)
    });

    const url = `${API_URL}/auth/${provider.toLowerCase()}?${query}`;

    await Linking.openURL(url);
  };

  return (
    <Tooltip label={`Continue with ${provider}`}>
      <Button
        mt="2"
        py="2"
        _web={{
          py:`1`
        }}
        width="20"
        backgroundColor="transparent"
        borderColor={useColorModeValue(`Light`, `Dark`) === `Light` ? `#000000` : `#797979`}
        borderWidth={1}
        onPress={onPress}
      >
        { icon }
      </Button>
    </Tooltip>
  );
}