import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BottonMenu from '../BottonMenu';

import { WebRoutesProps } from './types';

export default function AppRoutes({ screens }: WebRoutesProps) {
  return (
    <BrowserRouter>
      <Routes>
        {screens.map((screen) => (
          <Route key={screen.name} path={screen.route} element={<screen.screen />} />
        ))}
      </Routes>
      <BottonMenu />
    </BrowserRouter>
  );
}