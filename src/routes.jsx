import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import AdminRoute from './components/AdminRoute';

import FrontendLayout from './frontend/FrontendLayout';
import Home from './frontend/pages/Home';
import ArtworkPages from './frontend/pages/Artwork';
import About from './frontend/pages/About';
import Contact from './frontend/pages/Contact';
import Category from './frontend/pages/Category';
import PDP from './frontend/pages/PDP';

import Admin from './admin/pages/home';
import AdminLayout from './admin/AdminLayout';
import ProductList from './admin/pages/productlist';
import CategoryList from './admin/pages/categorylist';
import TagList from './admin/pages/taglist';
import OrderList from './admin/pages/orderlist';
import UserList from './admin/pages/userlist';
// import ReportList from './admin/pages/reportlist';
import Settings from './admin/pages/settings';




function AppRoutes() {
  return (
    <Router basename="/dungeon-artworks">
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="artwork" element={<ArtworkPages />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="category" element={<Category />} />
          <Route path="pdp" element={<PDP />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="products" element={<ProductList />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="tags" element={<TagList />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="users" element={<UserList />} />
          {/* <Route path="reports" element={<ReportList />} /> */}
          <Route path="settings" element={<Settings />} />
        </Route>
    
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
