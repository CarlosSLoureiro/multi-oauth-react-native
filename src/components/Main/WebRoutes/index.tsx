import { APP_NAME } from '@env';

import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import AppContext from '@contexts/AppContext';

import { screens } from '@screens/config';

import BottonMenu from '../BottonMenu';

const RoutesScreen = () => {
  const { currentScreen, setScreen, addAlert } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentScreen) {
      document.title = `${currentScreen.name} — ${APP_NAME}`;

      if (location.pathname !== currentScreen.route) {
        navigate(currentScreen.route);
      }
    } else {
      setScreen(`Home`);
      addAlert({ status: `warning`, message: `Page not found` }, 10000);
    }
  }, [currentScreen]);

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