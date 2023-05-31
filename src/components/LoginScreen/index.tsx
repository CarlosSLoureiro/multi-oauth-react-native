import Constants from "expo-constants";
import * as Linking from 'expo-linking';
import { Box, Button } from "native-base";

import encryptExternalData from "@utils/data-manager/encrypt";

import QueryString from 'query-string';

export default function LoginButton () {
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
}