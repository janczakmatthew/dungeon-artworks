// src/layouts/AdminLayout.jsx
import Sidebar from '../admin/components/sidebar';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="flex flex-row min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 bg-gray-700">
        <Outlet />
      </div>
    </div>
  );
}
