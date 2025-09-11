import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './home';
import ArtworkPages from './pages/Artwork';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import PDP from './pages/PDP';

function AppRoutes() {
  return (
    <Router basename="/dungeon-artworks">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="artwork" element={<ArtworkPages />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="category" element={<Category />} />
          <Route path="pdp" element={<PDP />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
