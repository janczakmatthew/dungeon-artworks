// src/layouts/FrontendLayout.jsx
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

export default function FrontendLayout() {
  return (
    <div>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen lg:pt-[115px] pt-[130px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
