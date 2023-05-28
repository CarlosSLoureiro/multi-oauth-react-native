import { useContext } from "react";
import { Button, View } from "react-native";
import { Center, Text, VStack } from "native-base";

import AppContext from "@contexts/AppContext";

export default function GenericAccountScreen() {
  const { setScreen } = useContext(AppContext);

  const navigateToActivities = () => {
    setScreen(`Activities`);
  };

  return (
    <Center _dark={{ bg: `blueGray.900` }} _light={{ bg: `blueGray.50` }} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <View style={{ flex: 1, alignItems: `center`, justifyContent: `center` }}>
          <Text>Account Screen</Text>
          <Button title="Go to Activities" onPress={navigateToActivities} />
        </View>
      </VStack>
    </Center>
  );
}