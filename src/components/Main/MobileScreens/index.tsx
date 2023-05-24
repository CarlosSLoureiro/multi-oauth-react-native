import BottonMenu from '../BottonMenu';

import { MobileScreensProps } from './types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function MobileScreens ({ screens }: MobileScreensProps) {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <></>}>
        {screens.map((screen) => (
          <Tab.Screen key={screen.name} name={screen.name} component={screen.screen} />
        ))}
      </Tab.Navigator>
      <BottonMenu />
    </NavigationContainer>
  );
}
