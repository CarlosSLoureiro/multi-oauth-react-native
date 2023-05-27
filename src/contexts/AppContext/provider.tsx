import { ReactElement, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as Linking from 'expo-linking';

import { screens } from '@screens/config';

import decryptExternalData from '@utils/data-manager/decrypt';

import AppContext from '.';

import { ScreenInterface, UserInterface } from './types';

export default function AppContextProvider ({ children }: { children: ReactElement }) {
  const [externalData, setExternalData] = useState<object>({});
  const [user, setUser] = useState<UserInterface | undefined>(undefined);
  const [currentScreen, setCurrentScreen] = useState<ScreenInterface | undefined>(undefined);

  const setScreen = (name: string) => {
    for (const screen of screens) {
      if (screen.name === name) {
        setCurrentScreen(screen);
        return;
      }
    }

    throw Error(`Screen "${name}" is not registed in screens config.`);
  };

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
    if (Platform.OS !== `web`) {
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
    <AppContext.Provider value={{ externalData, user, setUser, currentScreen, setScreen }}>
      {children}
    </AppContext.Provider>
  );
}