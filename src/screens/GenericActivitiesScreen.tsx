import { useContext } from "react";
import { Button, View } from "react-native";
import { Center, HStack, Skeleton,Text, VStack } from "native-base";

import AppContext from "@contexts/AppContext";

const SekletonExample = () => {
  return <Center w="100%">
    <HStack w="90%" maxW="400" borderWidth="1" space={8} rounded="md" _dark={{
      borderColor: `coolGray.500`
    }} _light={{
      borderColor: `coolGray.200`
    }} p="4">
      <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
      <VStack flex="3" space="4">
        <Skeleton startColor="amber.300" />
        <Skeleton.Text />
        <HStack space="2" alignItems="center">
          <Skeleton size="5" rounded="full" />
          <Skeleton h="3" flex="2" rounded="full" />
          <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
        </HStack>
      </VStack>
    </HStack>
  </Center>;
};

export default function GenericActivitiesScreen() {
  const { setScreen } = useContext(AppContext);

  const navigateToAccount = () => {
    setScreen(`Account`);
  };

  return (
    <Center _dark={{ bg: `blueGray.900` }} _light={{ bg: `blueGray.50` }} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <View style={{ flex: 1, alignItems: `center`, justifyContent: `center` }}>
          <Text>Activities Screen</Text>
          <Button title="Go to Account" onPress={navigateToAccount} />
          <SekletonExample/>
        </View>
      </VStack>
    </Center>
  );
}