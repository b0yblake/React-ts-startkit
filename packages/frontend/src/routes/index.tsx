import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PATHS from '../constants/clientPaths';
import Home from '../containers/Home';

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* PUBLIC PATHS */}
          <Route path={PATHS.HOME} element={<Home />} />

          {/* PROTECTED PATHS */}
          {/* <ProtectedRoute path={PATHS.HOME} component={Home} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
