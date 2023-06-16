import { ScreenInterface } from "@contexts/AppContext/types";

import AccountScreen from "@screens/Account";
import GenericActivitiesScreen from "@screens/GenericActivitiesScreen";
import HomeScreen from "@screens/Home";
import LoginScreen from "@screens/Login";

import SignupScreen from "./Signup";

export const screens: ScreenInterface[] = [
  {
    name: `Home`,
    route: `/`,
    screen: HomeScreen
  },
  {
    name: `Login`,
    route: `/login`,
    screen: LoginScreen,
    requireNotUser: true
  },
  {
    name: `Sign Up`,
    route: `/signup`,
    screen: SignupScreen,
    requireNotUser: true
  },
  {
    name: `Activities`,
    route: `/activities`,
    screen: GenericActivitiesScreen
  },
  {
    name: `Account`,
    route: `/account`,
    screen: AccountScreen,
    requireUser: true
  },

];