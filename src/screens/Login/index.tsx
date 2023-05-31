import { useContext } from "react";
import { Center } from "native-base";

import AppContext from "@contexts/AppContext";

import BaseScreen from "@components/BaseScreen";
import LoginButton from "@components/LoginScreen";

export default function GenericAccountScreen() {
  const { setScreen } = useContext(AppContext);

  return (
    <BaseScreen>
      <Center style={{
        flex: 1,
        alignItems: `center`
      }}>
        <LoginButton/>
      </Center>
    </BaseScreen>
  );
}