import React from 'react';
import logo from '../assets/images/adamas-logo.png'


const Header = () => {
  return (
    <header>

      <div className=" text-white py-2" style={{ backgroundColor: '#68C9FD' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <i className="fas fa-phone-alt mr-2"></i>
              +565 975 658
            </span>
            <span className="flex items-center">
              <i className="fas fa-envelope mr-2"></i>
              info@premiumcoding.com
            </span>
            <span className="hidden md:flex items-center">
              <i className="far fa-clock mr-2"></i>
              Monday - Friday, 8:00 - 20:00
            </span>
            
          </div>
          {/* Sign In / Cart */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Sign In / Register</a>
            <a href="#" className="hover:underline">Your Cart (0)</a>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">

          <img src={logo} alt='' />


          <ul className="hidden md:flex space-x-8 font-semibold">
            <li><a href="#" className="text-sm hover:text-[#68C9FD] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#68C9FD] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Home</a></li>
            <li><a href="#" className="text-sm hover:text-[#68C9FD] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#68C9FD] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Apparel</a></li>
            <li><a href="#" className="text-sm hover:text-[#68C9FD] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#68C9FD] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Fashion</a></li>
            <li><a href="#" className="text-sm hover:text-[#68C9FD] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#68C9FD] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">News</a></li>
            <li><a href="#" className="text-sm hover:text-[#68C9FD] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#68C9FD] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Portfolio</a></li>
            <li><a href="#" className="text-sm hover:text-[#68C9FD] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#68C9FD] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Contact</a></li>
          </ul>
          {/* button */}
          <div className="md:hidden">
            <button>
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
