import { ScreenInterface } from "@contexts/AppContext/types";

import GenericAccountScreen from "./GenericAccountScreen";
import GenericActivitiesScreen from "./GenericActivitiesScreen";
import HomeScreen from "./Home";

export const screens: ScreenInterface[] = [
  {
    name: `Home`,
    route: `/`,
    screen: HomeScreen
  },
  {
    name: `Activities`,
    route: `/activities`,
    screen: GenericActivitiesScreen
  },
  {
    name: `Account`,
    route: `/account`,
    screen: GenericAccountScreen
  },

];