import { createContext } from 'react';

import { AppContextInterface } from './types';

const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

export default AppContext;
