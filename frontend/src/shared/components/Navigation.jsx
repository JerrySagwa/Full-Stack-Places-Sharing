import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useState } from 'react';
import NavLink from './NavLink';
import SideBar from './SideBar';

const Navigation = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const NavLinks = [
    { to: '/', content: 'ALL USERS' },
    { to: '/places/u1', content: 'MY PLACES' },
    { to: '/places/new', content: 'ADD PLACE' },
    { to: '/auth', content: 'AUTHENTICATE' },
  ];

  return (
    <>
      <SideBar setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen}>
        <div className='flex flex-col gap-y-4 justify-center items-center'>
          {NavLinks.map((navLink, index) => {
            return (
              <div
                key={index}
                className=' flex items-center p-2 hover:bg-yellow-400 hover:text-slate-500 rounded-md hover:shadow-lg'
                onClick={() => setIsSideBarOpen(false)}
              >
                <NavLink to={navLink.to}>{navLink.content}</NavLink>
              </div>
            );
          })}
        </div>
      </SideBar>
      <div className='w-full sm:h-16 h-12 bg-pink-600 flex items-center sm:justify-between'>
        <div
          className='text-white h-full text-3xl flex items-center ml-4 sm:hidden cursor-pointer'
          onClick={() => setIsSideBarOpen(true)}
        >
          <RxHamburgerMenu />
        </div>
        <div className='ml-4 text-2xl sm:text-3xl text-white font-bold'>
          Your Places
        </div>
        <div className='hidden sm:flex mr-8 gap-x-8 items-center'>
          {NavLinks.map((navLink, index) => {
            return (
              <div
                className='h-12 flex items-center p-2 hover:bg-yellow-400 hover:text-slate-500 rounded-md hover:shadow-lg'
                key={index}
              >
                <NavLink to={navLink.to}>{navLink.content}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
