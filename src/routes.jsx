import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './home';
import ArtworkPages from './pages/Artwork';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="artwork" element={<ArtworkPages />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default AppRoutes;
