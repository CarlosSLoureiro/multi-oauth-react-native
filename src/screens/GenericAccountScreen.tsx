import { useContext } from "react";
import { Button, View } from "react-native";
import { Center, Text, VStack } from "native-base";

import AppContext from "@contexts/AppContext";

import BaseScreen from "@components/BaseScreen";

export default function GenericAccountScreen() {
  const { setScreen } = useContext(AppContext);

  const navigateToActivities = () => {
    setScreen(`Activities`);
  };

  return (
    <BaseScreen>
      <Text>Account Screen</Text>
      <Button title="Go to Activities" onPress={navigateToActivities} />
    </BaseScreen>
  );
}