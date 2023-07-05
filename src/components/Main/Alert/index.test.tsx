import TestContext from '@contexts/TestContext';

import Alert from './index';

import { AlertProps } from './types';

import { render } from '@testing-library/react-native';

const component = (props: AlertProps) => {
  return render(
    <TestContext>
      <Alert {...props} />
    </TestContext>
  );
};

describe(`Alert`, () => {
  it(`should render the alert with the given message`, () => {
    const props = {
      open: true,
      status: `success`,
      message: `This is a test message`,
      setAlert: jest.fn()
    };

    const { getByText } = component(props as AlertProps);

    const messageText = getByText(`This is a test message`);
    expect(messageText).toBeTruthy();
  });
});

