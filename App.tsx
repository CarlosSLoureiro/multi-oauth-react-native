import Main from "@main";

import { NativeBaseProvider } from "native-base";

import AppContextProvider from "@contexts/AppContext/provider";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContextProvider>
        <Main/>
      </AppContextProvider>
    </NativeBaseProvider>
  );
}