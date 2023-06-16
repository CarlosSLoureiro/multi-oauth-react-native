import { useContext } from "react";
import { Center } from "native-base";

import AppContext from "@contexts/AppContext";

import AccountMenu from "@components/AccountScreen/Menu";
import ProfileCard from "@components/AccountScreen/ProfileCard";
import BaseScreen from "@components/BaseScreen";

export default function GenericAccountScreen() {
  const { user } = useContext(AppContext);

  return (
    <BaseScreen>
      <Center flex={1} px="3">
        <Center w="100%">
          {user && <ProfileCard user={user} />}
        </Center>
        <AccountMenu />
      </Center>
    </BaseScreen>
  );
}