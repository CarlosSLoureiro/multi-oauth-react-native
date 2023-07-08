import { APP_NAME } from '@env';

import { useContext } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import AppContext from '@contexts/AppContext';
import { ScreenInterface } from '@contexts/AppContext/types';

import { screens } from '@screens/config';

import BottonMenu from '../BottonMenu';

const RoutesScreen = () => {
  const { appNavigation } = useContext(AppContext);

  const navigate = useNavigate();

  appNavigation.current = (screen: ScreenInterface): void => {
    document.title = `${screen.name} — ${APP_NAME}`;
    navigate(screen.route);
  };

  return (
    <>
      <Routes>
        {screens.map((screen) => (
          <Route key={screen.name} path={screen.route} element={<screen.screen />} />
        ))}
      </Routes>
      <BottonMenu />
    </>
  );
};


export default function WebRoutes() {
  return (
    <BrowserRouter>
      <RoutesScreen/>
    </BrowserRouter>
  );
}