import { ReactElement, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import AppContext from '@contexts/AppContext';

import { screens } from '@screens/config';

import BottonMenu from '../BottonMenu';


const RoutesScreen = () => {
  const { currentScreen } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentScreen !== undefined) {
      navigate(currentScreen.route);
    }
  }, [currentScreen, navigate]);

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