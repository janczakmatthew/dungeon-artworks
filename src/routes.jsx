import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FrontendLayout from "./frontend/FrontendLayout";
import Home from "./frontend/pages/Home";
import ArtworkPages from "./frontend/pages/Artwork";
import About from "./frontend/pages/About";
import Contact from "./frontend/pages/Contact";
import Category from "./frontend/pages/Category";
import PDP from "./frontend/pages/PDP";

import Admin from "./admin/pages/home";
import AdminLayout from "./admin/AdminLayout";
import ProductList from "./admin/pages/products/productlist";
import CategoryList from "./admin/pages/category/categorylist";
import TagList from "./admin/pages/tags/taglist";
import OrderList from "./admin/pages/orders/orderlist";
import UserList from "./admin/pages/users/userlist";
import MediaLibrary from "./admin/pages/media_library/media_library";
// import ReportList from './admin/pages/reportlist';
import Settings from "./admin/pages/settings/settings";

import Login from "./frontend/pages/Login"; // <-- your login page
import ProtectedRoute from "./admin/components/protectedroute";

function AppRoutes() {
  return (
    <Router basename="/dungeon-artworks">
      <Routes>
        {/* Frontend routes */}
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="artwork" element={<ArtworkPages />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="category" element={<Category />} />
          <Route path="pdp" element={<PDP />} />
        </Route>

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="products" element={<ProductList />} />
            <Route path="categories" element={<CategoryList />} />
            <Route path="tags" element={<TagList />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="media_libary" element={<MediaLibrary/>} />
            <Route path="users" element={<UserList />} />
            {/* <Route path="reports" element={<ReportList />} /> */}
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
