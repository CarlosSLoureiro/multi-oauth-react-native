import * as Linking from 'expo-linking';

import { AppContextInterface } from '@contexts/AppContext/types';
import TestContext from '@contexts/TestContext';

import { screens } from '@screens/config';

import BottonMenu from './index';

import { fireEvent, render } from '@testing-library/react-native';

const component = (appContext: Partial<AppContextInterface>) => {
  return render(
    <TestContext appContext={appContext}>
      <BottonMenu />
    </TestContext>
  );
};

describe(`BottonMenu`, () => {
  describe(`should render the menu items`, () => {
    [`Home`, `Activities`, `Repository`, `Account`].forEach((item) => {
      it(`should render the ${item} menu item`, () => {
        const contextMockProps = {
          activeScreen: { current: screens[0] },
          setScreen: jest.fn()
        };

        const { getByText } = component(contextMockProps);

        const menuItem = getByText(item);

        expect(menuItem).toBeTruthy();
      });
    });
  });

  describe(`should call the setScreen function on item press`, () => {
    [`Home`, `Activities`, `Account`].forEach((item) => {
      it(`should call the setScreen function on ${item} item press`, () => {
        const contextMockProps = {
          activeScreen: { current: screens[0] },
          setScreen: jest.fn()
        };

        const { getByText } = component(contextMockProps);

        const menuItem = getByText(item);

        fireEvent.press(menuItem);

        expect(contextMockProps.setScreen).toHaveBeenCalledTimes(1);
        expect(contextMockProps.setScreen).toHaveBeenCalledWith(item);
      });
    });
  });

  it(`should open the repository URL on item press`, () => {
    const contextMockProps = {
      activeScreen: { current: screens[0] },
      setScreen: jest.fn()
    };

    const windowOpenMock = jest.spyOn(Linking, `openURL`);

    const { getByText } = component(contextMockProps);

    const repositoryMenuItem = getByText(`Repository`);

    fireEvent.press(repositoryMenuItem);

    expect(windowOpenMock).toHaveBeenCalledTimes(1);
    expect(windowOpenMock).toHaveBeenCalledWith(
      `https://github.com/CarlosSLoureiro/multi-oauth-react-native`
    );
  });
});
