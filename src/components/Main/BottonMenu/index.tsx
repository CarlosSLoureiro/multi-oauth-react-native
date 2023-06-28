import { useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Linking from 'expo-linking';
import { Box, Center, HStack, Icon, Pressable, Text } from 'native-base';

import AppContext from "@contexts/AppContext";

import { MenuItemsInterface } from "./types";
import { boxProps, hStackProps, iconProps, textProps } from "./styles";

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottonMenu() {
  const [selected, setSelected] = useState<string>();
  const { currentScreen, setScreen } = useContext(AppContext);

  const items: MenuItemsInterface[] = [
    {
      name: `Home`,
      icon: <MaterialCommunityIcons name='home-outline' />,
      iconSelected: <MaterialCommunityIcons name='home' />,
      action: () => {
        setScreen(`Home`);
      }
    },
    {
      name: `Activities`,
      icon: <MaterialCommunityIcons name='account-group-outline' />,
      iconSelected: <MaterialCommunityIcons name='account-group' />,
      action: () => {
        setScreen(`Activities`);
      }
    },
    {
      name: `Repository`,
      icon: <MaterialCommunityIcons name='github' />,
      action: () => {
        const url = `https://github.com/CarlosSLoureiro/multi-oauth-react-native`;
        if (Platform.OS === `web`) {
          window.open(url, `_blank`);
        } else {
          Linking.openURL(url);
        }
      }
    },
    {
      name: `Account`,
      icon: <MaterialCommunityIcons name='account-outline' />,
      iconSelected: <MaterialCommunityIcons name='account' />,
      action: () => {
        setScreen(`Account`);
      }
    }
  ];

  useEffect(() => {
    if (currentScreen) {
      const isScreenInMenu = items.findIndex((item) => item.name === currentScreen.name) !== -1;
      if (isScreenInMenu) {
        setSelected(currentScreen.name);
      }
    }
  }, [currentScreen]);

  return (
    <Box {...boxProps}>
      <HStack {...hStackProps}>
        {items.map((item, index) => (
          <Pressable
            key={index}
            opacity={selected === item.name ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(item.name);
              item.action();
            }}>
            <Center>
              <Icon
                as={selected === item.name && item.iconSelected ? item.iconSelected : item.icon}
                {...iconProps}
              />
              <Text {...textProps}>
                {item.name}
              </Text>
            </Center>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
}
