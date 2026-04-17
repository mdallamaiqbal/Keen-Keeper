import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="mt-20 footer footer-horizontal footer-center bg-[#244D3F] text-white  rounded p-10">
        <div>
            <h3 className='text-xl md:text-5xl font-extrabold'>KeenKeeper</h3>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        </div>
  <nav>
    <h3 className='text-lg mb-2'>Social Links</h3>
    <div className="grid grid-flow-col gap-4">
      <a>
        <div className='w-10 h-10 flex justify-center items-center bg-white rounded-3xl text-black text-2xl'>
             <FaInstagramSquare />
        </div>
      </a>
     <a>
        <div className='w-10 h-10 flex justify-center items-center bg-white rounded-3xl text-black text-2xl'>
            <FaFacebookSquare />
        </div>
      </a>
      <a>
        <div className='w-10 h-10 flex justify-center items-center bg-white rounded-3xl text-black text-2xl'>
             <FaXTwitter />
        </div>
      </a>
    </div>
  </nav>
  
  <aside className='border-t border-[#FAFAFA]/20 '>
   <div className='flex flex-col md:flex-row gap-4 md:gap-28 mt-4'>
     <p className='text-[#FAFAFA]/40 text-sm'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
     <div>
        <ul className='flex gap-4 text-[#FAFAFA]/40 text-sm'>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookies</li>
        </ul>
     </div>
   </div>
  </aside>
</footer>
    );
};

export default Footer;