import React from 'react';
import { FaClock } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links =<>
                <li><NavLink to={'/'} className={({isActive})=>` ${isActive ? ' text-white bg-[#244D3F]' : ''}`}><IoHome /> Home</NavLink></li>
                <li><NavLink to={'/timeline'} className={({isActive})=>` ${isActive ? 'text-white bg-[#244D3F]' : ''}`}><FaClock/>Timeline</NavLink></li>
                <li><NavLink to={'/stats'} className={({isActive})=>` ${isActive ? 'text-white bg-[#244D3F]' : ''}`}><ImStatsDots/>Stats</NavLink></li>
    </>
return (
<nav className='bg-base-100 sticky top-0 z-50 shadow-sm md:mb-20'>
<div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to={'/'} className="text-2xl text-[#1F2937] font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></Link>
  </div>
  <div className="navbar-end hidden sm:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
</div>
</nav>

);
};

export default Navbar;