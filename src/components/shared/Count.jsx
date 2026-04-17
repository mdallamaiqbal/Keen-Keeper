import React from 'react';

const Count = () => {
    return (
        <div className='max-w-6xl mx-auto my-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-[#E9E9E9] pb-10'>
            <div className='p-4 md:p-8 rounded-xl shadow bg-white text-center transition duration-300 hover:shadow-lg'>
                <h3 className='text-xl md:text-3xl font-semibold text-[#244D3F]'>10</h3>
                <p className='text-sm text-gray-400 md:text-xl'>Total Friends</p>
            </div>
            <div className='p-4 md:p-8 rounded-xl shadow bg-white text-center transition duration-300 hover:shadow-lg'>
                <h3 className='text-xl md:text-3xl font-semibold text-[#244D3F]'>3</h3>
                <p className='text-sm text-gray-400 md:text-xl'>On Track</p>
            </div>
            <div className='p-4 md:p-8 rounded-xl shadow bg-white text-center transition duration-300 hover:shadow-lg'>
                <h3 className='text-xl md:text-3xl font-semibold text-[#244D3F]'>6</h3>
                <p className='text-sm text-gray-400 md:text-xl'>Need Attention</p>
            </div>
            <div className='p-4 md:p-8 rounded-xl shadow bg-white text-center transition duration-300 hover:shadow-lg'>
                <h3 className='text-xl md:text-3xl font-semibold text-[#244D3F]'>12</h3>
                <p className='text-sm text-gray-400 md:text-xl'>Interactions <br /> This Month</p>
            </div>
        </div>
    );
};

export default Count;