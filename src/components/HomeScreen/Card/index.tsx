import { Center, HStack, PresenceTransition, Text } from "native-base";

import NativeBaseIcon from "../NativeBaseIcon";

import { CardProps } from "./types";

export default function Card () {
  return <Center style={{
    display: `flex`,
    flexDirection: `row`,
    gap: 25
  }}>
    <PresenceTransition
      visible={true}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 500
        }
      }}
    >
      <Center w="150" h="110" mt="7" _dark={{ bg: `coolGray.500` }} _light={{ bg: `coolGray.200` }} rounded="md">
        <HStack space={2} flex={1} flexDirection="column" justifyContent="center" alignItems="center">
          <Text textAlign="center">This app has been made with <Text bold>Expo</Text> + <Text bold>Native Base</Text></Text>
          <NativeBaseIcon size='25px' />
        </HStack>
      </Center>
    </PresenceTransition>
    <PresenceTransition
      visible={true}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1000
        }
      }}
    >
      <Center w="150" h="110" mt="7" _dark={{ bg: `coolGray.500` }} _light={{ bg: `coolGray.200` }} rounded="md">Exemplo 2</Center>
    </PresenceTransition>
  </Center>;
}
