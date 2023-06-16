import { useContext } from "react";
import { Button,Center, Text } from "native-base";

import AppContext from "@contexts/AppContext";

import AccountMenu from "@components/AccountScreen/Menu";
import ProfileCard from "@components/AccountScreen/ProfileCard";
import BaseScreen from "@components/BaseScreen";

export default function GenericAccountScreen() {
  const { user, updateUser } = useContext(AppContext);

  const onLogout = () => {
    updateUser(undefined);
  };

  return (
    <BaseScreen>
      <Center flex={1} px="3">
        <Center w="100%">
          <ProfileCard/>
          <Button
            style={{display: `none`}}
            mt="2"
            colorScheme="indigo"
            onPress={onLogout}>Logout</Button>
        </Center>
        <AccountMenu/>
      </Center>
    </BaseScreen>
  );
}