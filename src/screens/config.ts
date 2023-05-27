import { ScreenInterface } from "@contexts/AppContext/types";

import GenericHomeScreen from "./GenericHomeScreen";
import GenericSettingsScreen from "./GenericSettingsScreen";

export const screens: ScreenInterface[] = [
  {
    name: `Home`,
    route: `/`,
    screen: GenericHomeScreen
  },
  {
    name: `Settings`,
    route: `/settings`,
    screen: GenericSettingsScreen
  },
];