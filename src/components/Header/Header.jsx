import React from 'react';
import { navLinks } from '../../constant/data';
import Logo from '../../ui/Logo';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="text-gray-600 hidden lg:block  mb-10 bg-opacity-60 bg-[#F2F9FF] body-font z-50 sticky top-0">
      <div className="z-[999999] container mx-auto px-10 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.href}`}
              className="mr-5 text-[16px] text-skin-dark nav-link "
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
