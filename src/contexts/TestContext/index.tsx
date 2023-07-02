import { NativeBaseProvider } from 'native-base';

import AppContext from '@contexts/AppContext';
import { AppContextInterface } from '@contexts/AppContext/types';

import { TestContextProps } from './types';

export default function TestContext({ appContext, children }: TestContextProps) {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <AppContext.Provider value={appContext as AppContextInterface}>
        {children}
      </AppContext.Provider>
    </NativeBaseProvider>
  );
}
