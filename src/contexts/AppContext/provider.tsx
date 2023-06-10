import { ReactElement, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as Linking from 'expo-linking';

import Alert from '@components/Main/Alert';
import { AlertProps } from '@components/Main/Alert/types';
import { screens } from '@screens/config';

import decryptExternalData from '@utils/data-manager/decrypt';
import encryptExternalData from '@utils/data-manager/encrypt';

import AppContext from '.';

import { ExternalDataInterface, ScreenInterface, UserInterface } from './types';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppContextProvider ({ children }: { children: ReactElement }) {
  const [externalData, setExternalData] = useState<ExternalDataInterface>({} as ExternalDataInterface);

  const [user, setUser] = useState<UserInterface | undefined>(undefined);
  const [asyncUserLoaded, setAsyncUserLoaded] = useState(false);

  const [alert, setAlert] = useState<Omit<AlertProps, "setAlert"> | undefined>(undefined);
  const [alertTimeout, setAlertTimeout] = useState<NodeJS.Timeout | null>(null);

  const [currentScreen, setCurrentScreen] = useState<ScreenInterface>((): ScreenInterface => {
    if (Platform.OS !== `web`) {
      return screens.find(screen => screen.name === `Home`) as ScreenInterface;
    } else {
      const url = new URL(window.location.href);
      return screens.find(screen => screen.route === url.pathname) as ScreenInterface;
    }
  });

  const updateUser = (userData?: UserInterface) => {
    if (userData) {
      const newUserData = {...user, ...userData};

      void (async () => {
        await AsyncStorage.setItem(`APP_USER_DATA`, encryptExternalData(newUserData));
      })();

      setUser(newUserData);
    } else {
      void (async () => {
        await AsyncStorage.removeItem(`APP_USER_DATA`);
      })();

      setUser(undefined);
    }
  };

  const setScreen = (name: string) => {
    for (const screen of screens) {
      if (screen.name === name) {
        if (screen?.requireUser && !user) {
          void (async () => {
            await AsyncStorage.setItem(`@ReturnScreen`, screen.name);
          })();

          setCurrentScreen(screens.find(screen => screen.name === `Login`) as ScreenInterface);
          return;
        }
        setCurrentScreen(screen);
        return;
      }
    }

    throw Error(`Screen "${name}" is not registed in screens config.`);
  };

  const addAlert = (alertProps: Omit<AlertProps, "open" | "setAlert">, timeout = 0) => {
    if (alertTimeout) {
      clearTimeout(alertTimeout);
      setAlertTimeout(null);
    }

    setAlert({
      ...alertProps,
      open: true
    });

    if (timeout > 0) {
      const newAlertTimeout = setTimeout(() => {
        setAlert({
          ...alertProps,
          open: false
        });
        setAlertTimeout(null);
      }, timeout);

      setAlertTimeout(newAlertTimeout);
    }
  };

  const executeExternalData = (value: string) => {
    try {
      const data = decryptExternalData(value);

      if (data) {
        setExternalData(data as ExternalDataInterface);
      }
    } catch (e) {
      console.log(`Invalid data!`);
    }
  };

  useEffect(() => {
    void (async () => {
      const userData = await AsyncStorage.getItem(`APP_USER_DATA`);
      if (userData !== null) {
        try {
          const decryptedData = decryptExternalData(userData);
          if (decryptedData) {
            setUser(decryptedData as UserInterface);
          } else {
            throw Error(`Could not decrypte user data`);
          }
        } catch (e) {
          await AsyncStorage.removeItem(`APP_USER_DATA`);
        }
      }
      setAsyncUserLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!asyncUserLoaded) {
      return;
    }

    if (currentScreen?.requireUser && !user) {
      void (async () => {
        await AsyncStorage.setItem(`@ReturnScreen`, currentScreen.name);
      })();

      setCurrentScreen(screens.find(screen => screen.name === `Login`) as ScreenInterface);
      return;
    }
  }, [asyncUserLoaded, user, currentScreen]);

  useEffect(() => {
    if (user) {
      void(async () => {
        const returnScreen = await AsyncStorage.getItem(`@ReturnScreen`);
        try {
          if (returnScreen !== null) {
            await AsyncStorage.removeItem(`@ReturnScreen`);
            setScreen(returnScreen);
          }
        } catch (e) {
          setScreen(`Home`);
        }
      }
      )();
    }
  }, [user]);

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
    <AppContext.Provider value={{
      externalData,
      user, updateUser,
      currentScreen, setScreen,
      addAlert
    }}>
      {alert && <Alert {...alert} setAlert={setAlert} />}
      {children}
    </AppContext.Provider>
  );
}