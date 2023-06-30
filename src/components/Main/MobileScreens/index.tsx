import { useContext, useEffect, useState } from 'react';
import { Keyboard, Platform, StatusBar, StatusBarProps } from 'react-native';
import { useColorModeValue } from 'native-base';

import AppContext from '@contexts/AppContext';
import { ScreenInterface } from '@contexts/AppContext/types';

import { screens } from '@screens/config';

import BottonMenu from '../BottonMenu';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';

export default function MobileScreens () {
  const { appNavigation } = useContext(AppContext);

  const navigation = createNavigationContainerRef();

  appNavigation.current = (screen: ScreenInterface): void => {
    navigation.navigate(screen.name as never);
  };

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === `android` ? `keyboardDidShow` : `keyboardWillShow`,
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === `android` ? `keyboardDidHide` : `keyboardWillHide`,
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const statusBarProps:StatusBarProps = useColorModeValue(`Light`, `Dark`) === `Light` ? {
    backgroundColor: `#ffffff`,
    barStyle: `dark-content`
  } : {
    backgroundColor: `#000000`,
    barStyle: `light-content`
  };

  const Tab = createBottomTabNavigator();
  const tabBar = keyboardVisible ? <></> : <BottonMenu />;

  return (
    <NavigationContainer ref={navigation}>
      <StatusBar {...statusBarProps} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: `center`,
        }}
        tabBar={() => tabBar}
      >
        {screens.map((screen) => (
          <Tab.Screen key={screen.name} name={screen.name} component={screen.screen} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
