import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './home';
import ArtworkPages from './pages/Artwork';
import PDP from './pages/PDP';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="artwork" element={<ArtworkPages />} />
          <Route path="about" element={<div>About Page</div>} />
          <Route path="contact" element={<div>Contact Page</div>} />  
          <Route path="pdp" element={<PDP />} />          
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>

  );
}

export default AppRoutes;
