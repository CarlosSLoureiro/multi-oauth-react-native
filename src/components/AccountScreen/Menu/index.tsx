import { useContext } from 'react';
import { Box, Button, HStack, Icon, Stagger, Text, useDisclose, View } from 'native-base';

import AppContext from '@contexts/AppContext';

import { MenuItems, MenuProps } from './types';
import { containerBoxProps, menuButtons, settingsButton } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AccountMenu ({isOpen, setIsOpen}: MenuProps) {
  const { setScreen, updateUser } = useContext(AppContext);

  const menuItems: MenuItems[] = [
    {
      title: `Change Password`,
      icon: <MaterialCommunityIcons name='lock-check' />,
      onPress: () => {
        setScreen(`Change Password`);
      }
    },
    {
      title: `Logout`,
      icon: <MaterialCommunityIcons name='logout-variant' />,
      onPress: () => {
        updateUser(undefined);
      }
    }
  ];

  return (
    <Box {...containerBoxProps}>
      <HStack {...settingsButton.hStack}>
        <Button {...settingsButton.button} onPress={() => { setIsOpen(!isOpen); }} testID='settings-button'>
          <View {...settingsButton.view}>
            {isOpen && <Text {...settingsButton.text}>Settings</Text>}
            <Icon {...settingsButton.icon} as={<MaterialCommunityIcons name='cogs' />}/>
          </View>
        </Button>
      </HStack>
      <Box {...menuButtons.box}>
        <Stagger visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: -50,
            translateX: 50
          }}
          animate={{
            translateY: 0,
            translateX: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: `spring`,
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }}
          exit={{
            translateY: -34,
            translateX: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }}>
          {
            menuItems.map((menuItem, index) => (
              <Button key={index} {...menuButtons.button} onPress={menuItem.onPress}>
                <View {...menuButtons.view}>
                  <Text {...menuButtons.text}>{menuItem.title}</Text>
                  <Icon {...menuButtons.icon} as={menuItem.icon} />
                </View>
              </Button>
            ))
          }
        </Stagger>
      </Box>
    </Box>
  );
}

