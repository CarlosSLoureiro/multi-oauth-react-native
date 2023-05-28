import { useContext, useEffect } from 'react';
import { Platform } from 'react-native';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import AppContext from '@contexts/AppContext';

import { screens } from '@screens/config';

import BottonMenu from '../BottonMenu';

const RoutesScreen = () => {
  const { currentScreen } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = currentScreen.name;

    if (location.pathname !== currentScreen.route) {
      navigate(currentScreen.route);
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