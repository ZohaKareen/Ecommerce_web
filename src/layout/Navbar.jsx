import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/button';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-zinc-800">
      <div className="text-white text-xl font-bold">
        ECommerce website
      </div>
      <div className="space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-white ${isActive ? 'font-bold' : 'hover:text-gray-300'}`
          }
        >
          Products
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `text-white  ${isActive ? 'font-bold' : 'hover:text-gray-300'}`
          }
        >
          Contact
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => 
            `text-white ${isActive ? 'font-bold' : 'hover:text-gray-300'}`
          }
        >
          Cart
        </NavLink>
       
      </div>
      
    </nav>
  );
};

export default Navbar;
