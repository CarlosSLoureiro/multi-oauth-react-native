import { useContext, useEffect, useState } from 'react';
import { Keyboard, Platform, StatusBar, StatusBarProps } from 'react-native';
import { useColorModeValue } from 'native-base';

import AppContext from '@contexts/AppContext';

import { screens } from '@screens/config';

import BottonMenu from '../BottonMenu';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

export default function MobileScreens () {
  const Tab = createBottomTabNavigator();
  const navigationRef = createNavigationContainerRef();
  const { currentScreen } = useContext(AppContext);
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

  useEffect(() => {
    if (currentScreen !== undefined) {
      navigationRef.navigate(currentScreen.name as never);
    }
  }, [currentScreen]);

  const statusBarProps:StatusBarProps = useColorModeValue(`Light`, `Dark`) === `Light` ? {
    backgroundColor: `#ffffff`,
    barStyle: `dark-content`
  } : {
    backgroundColor: `#000000`,
    barStyle: `light-content`
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar {...statusBarProps} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: `center`,
        }}
        tabBar={props => keyboardVisible ? <></> : <BottonMenu />}
      >
        {screens.map((screen) => (
          <Tab.Screen key={screen.name} name={screen.name} component={screen.screen} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
