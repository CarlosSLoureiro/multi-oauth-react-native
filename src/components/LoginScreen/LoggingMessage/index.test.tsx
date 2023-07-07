import TestContext from "@contexts/TestContext";

import LoggingMessage from './index';

import { LoggingMessageProps } from "./types";

import { render } from '@testing-library/react-native';

const component = (props: LoggingMessageProps) => {
  return render(
    <TestContext>
      <LoggingMessage {...props}/>
    </TestContext>
  );
};

describe(`LoggingMessage`, () => {
  const testWithProvider = (provider: string) => (() => {
    const { getByText } = component({provider, icon: <></>});

    expect(getByText(`Logging in with ${provider}`)).toBeTruthy();
  });

  [`Google`, `Facebook`, `Twitter`].forEach(provider => {
    it(`should render message with ${provider} provider`, testWithProvider(provider));
  });
});
