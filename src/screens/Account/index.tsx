import { useContext, useState } from "react";
import { Center } from "native-base";

import AppContext from "@contexts/AppContext";

import AccountMenu from "@components/AccountScreen/Menu";
import ProfileCard from "@components/AccountScreen/ProfileCard";
import BaseScreen from "@components/BaseScreen";

export default function GenericAccountScreen() {
  const { user } = useContext(AppContext);
  const [ isOpen, setIsOpen ] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <BaseScreen onFocus={onClose} onUnfocus={onClose}>
      <Center flex={1} px="3">
        <Center w="100%">
          {user && <ProfileCard user={user} />}
        </Center>
        <AccountMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Center>
    </BaseScreen>
  );
}