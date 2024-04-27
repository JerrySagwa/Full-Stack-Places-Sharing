import { AiFillCloseCircle } from 'react-icons/ai';
import React from 'react';

const SideBar = ({ children, setIsSideBarOpen, isSideBarOpen }) => {
  console.log(children);
  return (
    <div
      className={`z-20 fixed sm:hidden left-0 top-0 h-screen w-[50%] bg-white transform duration-300 ${
        isSideBarOpen ? 'translate-x-0' : 'translate-x-[-100%]'
      } flex flex-col justify-center opacity-85`}
    >
      <div
        className='absolute top-3 right-3 cursor-pointer'
        onClick={() => setIsSideBarOpen(false)}
      >
        <AiFillCloseCircle className='w-6 h-6' />
      </div>
      <div className='relative flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
};

export default SideBar;
