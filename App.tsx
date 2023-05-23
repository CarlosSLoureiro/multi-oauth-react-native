import Main from "./src/Main";
import { NativeBaseProvider } from "native-base";
import AppContextProvider from "./src/contexts/AppContext";

export default () =>
    <NativeBaseProvider>
        <AppContextProvider>
            <Main/>
        </AppContextProvider>
    </NativeBaseProvider>;