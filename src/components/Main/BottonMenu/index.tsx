import { useContext, useEffect, useState } from "react";
import * as Linking from 'expo-linking';
import { Box, Center, HStack, Icon, Pressable, Text } from 'native-base';

import AppContext from "@contexts/AppContext";

import { MenuItemsInterface } from "./types";
import { boxProps, hStackProps } from "./styles";

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottonMenu() {
  const [selected, setSelected] = useState<string>();
  const { currentScreen, setScreen } = useContext(AppContext);

  useEffect(() => {
    setSelected(currentScreen.name);
  }, [currentScreen]);

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
      name: `Developer`,
      icon: <MaterialCommunityIcons name='github' />,
      action: () => {
        Linking.openURL(`https://github.com/CarlosSLoureiro`);
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

  return (
    <Box {...boxProps}>
      <HStack {...hStackProps}>
        {items.map((item, index) => (
          <Pressable
            key={index}
            opacity={selected === item.name ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={item.action}>
            <Center>
              <Icon
                mb="1"
                as={selected === item.name && item.iconSelected ? item.iconSelected : item.icon}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                {item.name}
              </Text>
            </Center>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
}
