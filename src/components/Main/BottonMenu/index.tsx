import { useState } from "react";
import { Platform } from "react-native";
import { Box, Center, HStack, Icon, Pressable,Text } from 'native-base';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function BottonMenu() {
  const [selected, setSelected] = useState(1);

  return (
    <Box flex={1} _dark={{ bg: `blueGray.900` }} _light={{ bg: `blueGray.50` }} position="absolute" safeAreaTop width="100%" bottom={[`ios`, `android`].includes(Platform.OS) ? 0 : 5}>
      <HStack bg="#302442" alignItems="center" safeAreaBottom shadow={6} width="400px" alignSelf="center" paddingLeft={50} paddingRight={50} borderRadius={[`ios`, `android`].includes(Platform.OS) ? 0 : 50}>
        <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
          <Center>
            <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? `home` : `home-outline`} />} color="white" size="sm" />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
          <Center>
            <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
            <Text color="white" fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
          <Center>
            <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? `cart` : `cart-outline`} />} color="white" size="sm" />
            <Text color="white" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
          <Center>
            <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? `account` : `account-outline`} />} color="white" size="sm" />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}