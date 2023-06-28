import { ReactElement, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as Linking from 'expo-linking';

import AppContext from '@contexts/AppContext';

import Alert from '@components/Main/Alert';
import { AlertProps } from '@components/Main/Alert/types';
import { screens } from '@screens/config';

import decryptExternalData from '@utils/data-manager/decrypt';
import encryptExternalData from '@utils/data-manager/encrypt';

import AuthCheckRequest from '@remote/AuthCheck';

import { ExternalDataInterface, ScreenInterface, UserInterface } from './types';

import AsyncStorage from '@react-native-async-storage/async-storage';
import QueryString from 'query-string';

export default function AppContextProvider ({ children }: { children: ReactElement }) {
  const [externalData, setExternalData] = useState<ExternalDataInterface>({} as ExternalDataInterface);

  const [user, setUser] = useState<UserInterface | undefined>(undefined);
  const [userTokenVerified, setUserTokenVerified] = useState(false);
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

  const updateUser = (userData?: Partial<UserInterface>) => {
    if (userData) {
      const newUserData = {...user, ...userData};

      void (async () => {
        await AsyncStorage.setItem(`APP_USER_DATA`, encryptExternalData(newUserData));
      })();

      setUser(newUserData as UserInterface);
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
            await AsyncStorage.setItem(`APP_RETURN_SCREEN`, screen.name);
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
      const searchParams = QueryString.parse(value);
      const data = searchParams.data ? String(searchParams.data) : null;

      if (data) {
        const dataDecrypted = decryptExternalData(data);

        if (dataDecrypted) {
          setExternalData(dataDecrypted as ExternalDataInterface);
        }
      }
    } catch (e) {
      console.log(`Invalid data!`);
    }
  };

  const verifyUserToken = async (token: string) => {
    try {
      const response = await AuthCheckRequest(token);

      if (!response.error) {
        updateUser(response);
      } else if (response.error === `Expired auth token`) {
        addAlert({ status: `warning`, message: `Your session has been expired` }, 10000);
        updateUser(undefined);
      } else {
        addAlert({ status: `error`, message: response.message ? `${response.error}: ${response?.message}` : response.error }, 5000);
        updateUser(undefined);
      }

      setUserTokenVerified(true);
    } catch (error: any) {
      addAlert({ status: `error`, message: `There was an error trying to sync your user data. Please check your internet connection and try again in a few minutes.` }, 20000);
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
        await AsyncStorage.setItem(`APP_RETURN_SCREEN`, currentScreen.name);
      })();

      setCurrentScreen(screens.find(screen => screen.name === `Login`) as ScreenInterface);
      return;
    } else if (currentScreen?.requireNotUser && user && Platform.OS === `web`) {
      setScreen(`Home`);
    }
  }, [asyncUserLoaded, user, currentScreen]);

  useEffect(() => {
    if (user) {
      if (!userTokenVerified) {
        void verifyUserToken(user.token);
      }

      void(async () => {
        const returnScreen = await AsyncStorage.getItem(`APP_RETURN_SCREEN`);
        try {
          if (returnScreen !== null) {
            await AsyncStorage.removeItem(`APP_RETURN_SCREEN`);
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