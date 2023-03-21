import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';

import { BiMenu } from 'react-icons/bi';
import { navLinks } from '../../constant/data';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => setIsOpen(!isOpen);
  return (
    <header>
      <div className="div lg:hidden py-5 flex px-5 justify-between items-center">
        <div className="logo">
          <img src="/logo.png" alt="KIMI" />
        </div>
        <BiMenu
          onClick={() => openNavbar()}
          className="text-skin-dark "
          size={36}
        />
      </div>
      <div
        className={` transition	duration-200  ease-in lg:hidden z-[999999] fixed top-0  mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full bg-skin-dark ${
          !isOpen ? '-translate-x-full' : '-translate-x-0'
        }`}
      >
        <div className="logo  flex  justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="KIMI" />
          </div>
          <RxCross2
            onClick={() => openNavbar()}
            className="text-white "
            size={36}
          />
        </div>
        <ul className="flex flex-col pt-7 md:flex-row gap-6">
          {navLinks.map((link, i) => (
            <li key={link} onClick={openNavbar}>
              <a
                href={`#${link.href}`}
                className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
                aria-current="page"
              >
                {link.name}
              </a>
            </li>
          ))}

          <button type="button" className="btn-primary mt-10">
            VAI ALL’APPLICAZIONE
          </button>
        </ul>
      </div>
    </header>
  );
};

export default MobileMenu;
