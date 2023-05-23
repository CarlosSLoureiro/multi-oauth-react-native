import { createContext, ReactElement, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as Linking from 'expo-linking';

import decryptExternalData from '@utils/data-manager/decrypt';

import { AppContextInterface, UserInterface } from './types';

// Criando o contexto
export const AppContext = createContext<AppContextInterface>({
  externalData: {},
  user: undefined,
  setUser: (user: UserInterface) => {}
} as AppContextInterface);

// Componente que irá prover o contexto
export default function AppContextProvider ({ children }: { children: ReactElement }) {
  const [externalData, setExternalData] = useState<object>({});
  const [user, setUser] = useState<UserInterface | undefined>(undefined);

  const executeExternalData = (value: string) => {
    try {
      const data = decryptExternalData(value);

      if (data) {
        setExternalData(data);
      }
    } catch (e) {
      console.log(`Invalid data!`);
    }
  };

  useEffect(() => {
    if ([`ios`, `android`].includes(Platform.OS)) {
      Linking.addEventListener(`url`, ({ url }) => {
        const match = url.match(/\/\?(.*)/);
        const query = match && match[1];

        if (query) {
          executeExternalData(query);
        }
      });
    } else {
      executeExternalData(window.location.search);
    }
  }, []);

  return (
    <AppContext.Provider value={{ externalData, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
