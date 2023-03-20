import React from 'react';
import { navLinks } from '../../constant/data';
import Logo from '../../ui/Logo';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto px-10 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
        </a>
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
