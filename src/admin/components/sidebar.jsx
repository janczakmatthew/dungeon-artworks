import React from 'react';
import { Link } from 'react-router-dom';

import { LuHouse, LuTag, LuGrid2X2, LuTags, LuShoppingCart, LuUser, LuSettings, LuImage } from 'react-icons/lu';


export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-md text-white min-h-screen">
        {/* <h2 className="text-2xl font-bold mb-6">Admin Panel</h2> */}
        <nav>
            <ul>
                <li className="mb-4">
                    <Link to="/admin" className="flex flex-row items-center w-full px-4 py-2 hover:bg-gray-700 transition">
                    <LuHouse className="align-center mr-2" />
                    Dashboard
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/products" className="flex flex-row items-center w-full px-4 py-2 hover:bg-gray-700 transition">
                    <LuTag className="align-center mr-2" />
                    Products
                    </Link>  
                </li>
                <li className="mb-4">
                    <Link to="/admin/categories" className="flex flex-row items-center w-full px-4 py-2 hover:bg-gray-700 transition">
                    <LuGrid2X2 className="align-center mr-2" />
                    Categories
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/tags" className="flex flex-row items-center w-full px-4 py-2 hover:bg-gray-700 transition">
                    <LuTags className="align-center mr-2" />
                    Tags
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/orders" className="flex flex-row items-center w-full px-4 py-2 hover:bg-gray-700 transition">
                    <LuShoppingCart className="align-center mr-2" />
                    Orders
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/media_libary" className="flex flex-row items-center w-full px-4 py-2 hover:bg-gray-700 transition">
                    <LuImage className="align-center mr-2" />
                    Media Libary
                    </Link>
                </li>
                <li className="mb-4">           
                    <Link to="/admin/users" className="flex flex-row items-center w-full px-4 py-2 hover:bg-gray-700 transition">
                    <LuUser className="align-center mr-2" />
                    Users
                    </Link>
                </li>
                {/* <li className="mb-4">
                    <Link to="/admin/reports" className="hover:underline">Reports</Link>
                </li> */}
                <li className="mb-4">
                    <Link to="/admin/settings" className="flex flex-row items-center w-full px-4 py-2 hover:bg-gray-700 transition">
                    <LuSettings className="align-center mr-2" />
                    Settings
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}