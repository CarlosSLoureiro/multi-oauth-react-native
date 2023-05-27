import { useContext, useEffect } from 'react';
import { StatusBar } from 'native-base';

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

  useEffect(() => {
    if (currentScreen !== undefined) {
      navigationRef.navigate(currentScreen.name as never);
    }
  }, [currentScreen]);

  //navigationRef.current
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        backgroundColor={`black`}
        barStyle={`dark-content`}
      />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: `center`
        }}
        tabBar={props => <></>}
      >
        {screens.map((screen) => (
          <Tab.Screen key={screen.name} name={screen.name} component={screen.screen} />
        ))}
      </Tab.Navigator>
      <BottonMenu />
    </NavigationContainer>
  );
}
