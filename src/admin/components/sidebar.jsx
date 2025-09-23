import React from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
        {/* <h2 className="text-2xl font-bold mb-6">Admin Panel</h2> */}
        <nav>
            <ul>
                <li className="mb-4">
                    <Link to="/admin" className="hover:underline">Dashboard</Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/products" className="hover:underline">Products</Link>  
                </li>
                <li className="mb-4">
                    <Link to="/admin/categories" className="hover:underline">Categories</Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/tags" className="hover:underline">Tags</Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/orders" className="hover:underline">Orders</Link>
                </li>
                <li className="mb-4">           
                    <Link to="/admin/users" className="hover:underline">Users</Link>
                </li>
                {/* <li className="mb-4">
                    <Link to="/admin/reports" className="hover:underline">Reports</Link>
                </li> */}
                <li className="mb-4">
                    <Link to="/admin/settings" className="hover:underline">Settings</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}