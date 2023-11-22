import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import "./Navber.css"

const Navber = () => {
  const style = {
    liStyle: `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
  }

  const login = true;
  return (
    <div className='bg-base-200 shadow-md rounded-md'>
      <div className="navbar bg-base-200 container mx-auto shadow-md rounded-md">
        <div className="navbar-start">

          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className='w-10 h-10 rounded-full' src="https://i.ibb.co/JR9kfBC/devlinkhub-2.png" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DevLinkHub</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#" className={style.liStyle}>Home</a>
            </li>
            <li>
              <a href="#" className={style.liStyle}>Explore</a>
            </li>
            <li>
              <a href="#" className={style.liStyle}>Collaborate</a>
            </li>
            <li>
              <a href="#" className={style.liStyle}>Messages</a>
            </li>
            <li>
              <a href="#" className={style.liStyle}>Notifications</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        {
          login? 
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/JR9kfBC/devlinkhub-2.png" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36">
              <li><a>Profile</a></li>
              {login ? (
                <li>
                  <a>Logout</a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          :
          <button className="font-semibold capitalize border border-black text-black p-2 rounded">Sign Up</button>

        }
        <div className='dn'>
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <FiAlignJustify className="h-8 w-8" ></FiAlignJustify>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mr-10 mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="#" className={style.liStyle}>Home</a>
              </li>
              <li>
                <a href="#" className={style.liStyle}>Explore</a>
              </li>
              <li>
                <a href="#" className={style.liStyle}>Collaborate</a>
              </li>
              <li>
                <a href="#" className={style.liStyle}>Messages</a>
              </li>
              <li>
                <a href="#" className={style.liStyle}>Notifications</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;