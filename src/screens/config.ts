import { ScreenInterface } from "@contexts/AppContext/types";

import AccountScreen from "@screens/Account";
import ActivitiesScreen from "@screens/Activities";
import HomeScreen from "@screens/Home";
import LoginScreen from "@screens/Login";

import ChangePasswordScreen from "./ChangePassword";
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
    screen: ActivitiesScreen
  },
  {
    name: `Account`,
    route: `/account`,
    screen: AccountScreen,
    requireUser: true
  },
  {
    name: `Change Password`,
    route: `/account/change-password`,
    screen: ChangePasswordScreen,
    requireUser: true
  }
];