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
<nav className='bg-base-100 shadow-sm mb-20'>
    <div className="navbar container mx-auto">
        <div className="flex-1">
            <Link to={'/'} className="text-sm sm:text-2xl text-[#1F2937] font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
    </div>
</nav>
);
};

export default Navbar;