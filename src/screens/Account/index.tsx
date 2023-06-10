import { useContext } from "react";
import { Button } from "react-native";
import { Text } from "native-base";

import AppContext from "@contexts/AppContext";

import BaseScreen from "@components/BaseScreen";

export default function GenericAccountScreen() {
  const { setScreen, user, updateUser } = useContext(AppContext);

  const navigateToActivities = () => {
    setScreen(`Activities`);
  };

  const onLogout = () => {
    updateUser(undefined);
  };

  return (
    <BaseScreen>
      <Text>Account Screen from {user?.name}</Text>
      <Button title="Go to Activities" onPress={navigateToActivities} />
      <Button title="Logout" onPress={onLogout} />
    </BaseScreen>
  );
}