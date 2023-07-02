import { NativeBaseProvider } from 'native-base';

import { TestContextProps } from './types';

export default function TestContext({ children }: TestContextProps) {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      {children}
    </NativeBaseProvider>
  );
}
