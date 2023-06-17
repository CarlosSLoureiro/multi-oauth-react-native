import { API_URL } from '@env';

import Constants from "expo-constants";
import * as Linking from 'expo-linking';
import { Box, Button } from "native-base";

import encryptExternalData from "@utils/data-manager/encrypt";

import QueryString from 'query-string';

export default function LoginButton () {
  return <Box alignItems="center">
    <Button onPress={async () => {
      const params = {
        'isDevelopment': __DEV__,
        'debuggerHost': Constants.manifest?.debuggerHost,
      };

      const query = QueryString.stringify({
        data: encryptExternalData(params)
      });

      const url = `${API_URL}/auth/google?${query}`;

      await Linking.openURL(url);
    }}>Login</Button>
  </Box>;
}