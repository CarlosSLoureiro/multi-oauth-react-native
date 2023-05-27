import { useContext } from "react";
import { Button, View } from "react-native";
import { Center, Text,VStack } from "native-base";

import AppContext from "@contexts/AppContext";

export default function GenericSettingsScreen() {
  const { setScreen } = useContext(AppContext);

  const navigateToHome = () => {
    setScreen(`Home`);
  };

  return (
    <Center _dark={{ bg: `blueGray.900` }} _light={{ bg: `blueGray.50` }} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <View style={{ flex: 1, alignItems: `center`, justifyContent: `center` }}>
          <Text>Settings Screen</Text>
          <Button title="Go to Home" onPress={navigateToHome} />
        </View>
      </VStack>
    </Center>
  );
}