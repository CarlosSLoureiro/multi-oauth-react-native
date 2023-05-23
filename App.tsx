import Main from "@main";
import { NativeBaseProvider } from "native-base";
import AppContextProvider from "@contexts/AppContext";

export default () =>
    <NativeBaseProvider>
        <AppContextProvider>
            <Main/>
        </AppContextProvider>
    </NativeBaseProvider>;