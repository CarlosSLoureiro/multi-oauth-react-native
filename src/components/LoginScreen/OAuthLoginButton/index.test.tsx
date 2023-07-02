import * as Linking from 'expo-linking';

import TestContext from '@contexts/TestContext';

import OAuthLoginButton from './index';

import { fireEvent, render } from '@testing-library/react-native';
import QueryString from 'query-string';

const component = (provider:string) => {
  return render(
    <TestContext>
      <OAuthLoginButton provider={provider} icon={<></>} />
    </TestContext>
  );
};

describe(`OAuthLoginButton`, () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  [`Google`, `Facebook`, `Twitter`].forEach(provider => {
    it(`should open ${provider} oauth url from api`, () => {
      const api = `http://api-multi-oauth-react-native-test.carlosloureiro.xyz`;
      const expectedURL = `${api}/auth/${provider.toLowerCase()}?${QueryString.stringify({data: `encrypted-data`})}`;
      const openURLMock = jest.spyOn(Linking, `openURL`);

      const { getByTestId } = component(provider);

      const oauthButton = getByTestId(`oauth-button`);

      fireEvent.press(oauthButton);

      expect(openURLMock).toHaveBeenCalledTimes(1);
      expect(openURLMock).toHaveBeenCalledWith(expectedURL);
    });
  });
});