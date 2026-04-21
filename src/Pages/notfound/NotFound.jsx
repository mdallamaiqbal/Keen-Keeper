import React from 'react';
import { Link } from 'react-router';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            
            <div className="relative mb-8">
                <HiOutlineExclamationCircle className="text-9xl text-[#244D3F] opacity-10 animate-pulse" />
                <h1 className="absolute inset-0 flex items-center justify-center text-8xl font-black text-[#244D3F]">
                    404
                </h1>
            </div>

          
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Oops! This shelf is empty.
            </h2>
            
            <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                The connection you are looking for might have been moved, deleted, 
                or is currently tending to its own garden.
            </p>

         
            <Link
                to="/"
                className="btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none px-10 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                Back to Dashboard
            </Link>

            {/* Subtle branding hint */}
            <p className="mt-12 text-[#244D3F]/30 text-sm font-medium tracking-widest uppercase">
                KeenKeeper
            </p>
        </div>
    );
};

export default NotFound;