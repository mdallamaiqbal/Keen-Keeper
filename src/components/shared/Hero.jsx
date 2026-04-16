import React from 'react';

const Hero = () => {
    return (
        <div className='container mx-auto mt-20'>
           <h2 className='text-xl md:text-5xl font-bold text-center '>Friends to keep close in your life</h2>
           <p className='text-sm md:text-base text-gray-400 mt-4 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
           <div className='flex justify-center'>
            <button className='  mt-8 bg-[#244D3F] btn text-white'>+ Add a Friend</button>
           </div>
        </div>
    );
};

export default Hero;