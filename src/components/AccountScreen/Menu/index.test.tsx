import { AppContextInterface } from '@contexts/AppContext/types';
import TestContext from '@contexts/TestContext';

import AccountMenu from './index';

import { MenuProps } from './types';

import { fireEvent, render } from '@testing-library/react-native';

const component = (appContext: Partial<AppContextInterface>, props: MenuProps) => {
  return render(
    <TestContext appContext={appContext}>
      <AccountMenu {...props} />
    </TestContext>
  );
};

describe(`AccountMenu`, () => {
  jest.useFakeTimers();

  it(`should open if it is closed`, () => {
    const contextMockProps = {
      setScreen: jest.fn(),
      updateUser: jest.fn()
    };
    const componentMockProps = {
      isOpen: false,
      setIsOpen: jest.fn()
    };

    const { getByTestId } = component(contextMockProps, componentMockProps);

    const settingsButton = getByTestId(`settings-button`);

    expect(settingsButton).toBeTruthy();

    fireEvent.press(settingsButton);

    expect(componentMockProps.setIsOpen).toHaveBeenCalledTimes(1);
    expect(componentMockProps.setIsOpen).toHaveBeenCalledWith(true);
  });

  describe(`if it is open`, () => {
    const contextMockProps = {
      setScreen: jest.fn(),
      updateUser: jest.fn()
    };
    const componentMockProps = {
      isOpen: true,
      setIsOpen: jest.fn()
    };

    it(`Settings button should close`, () => {
      const { getByText } = component(contextMockProps, componentMockProps);

      const settingsButton = getByText(`Settings`);

      expect(settingsButton).toBeTruthy();

      fireEvent.press(settingsButton);

      expect(componentMockProps.setIsOpen).toHaveBeenCalledTimes(1);
      expect(componentMockProps.setIsOpen).toHaveBeenCalledWith(false);
    });

    it(`Change Password button should go to Change Password screen`, () => {
      const { getByText } = component(contextMockProps, componentMockProps);

      const changePasswordButton = getByText(`Change Password`);

      expect(changePasswordButton).toBeTruthy();

      fireEvent.press(changePasswordButton);

      expect(contextMockProps.setScreen).toHaveBeenCalledWith(`Change Password`);
    });

    it(`Logout button should logout user`, () => {
      const { getByText } = component(contextMockProps, componentMockProps);

      const logoutButton = getByText(`Logout`);

      expect(logoutButton).toBeTruthy();

      fireEvent.press(logoutButton);

      expect(contextMockProps.updateUser).toHaveBeenCalledWith(undefined);
    });
  });
});