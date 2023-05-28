import { ScreenInterface } from "@contexts/AppContext/types";

import GenericAccountScreen from "./GenericAccountScreen";
import GenericHomeScreen from "./GenericHomeScreen";

export const screens: ScreenInterface[] = [
  {
    name: `Home`,
    route: `/`,
    screen: GenericHomeScreen
  },
  {
    name: `Account`,
    route: `/account`,
    screen: GenericAccountScreen
  },
];