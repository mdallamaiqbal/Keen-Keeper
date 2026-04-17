import React from 'react';
import { Link } from 'react-router';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {
    const data =[
       {name: 'Call' , value: 400 , fill: '#244D3F'},
       {name: 'Text' , value: 400 , fill: '#7E35E1'},
       {name: 'Video' , value: 400 , fill: '#37A163'}
    ]
    return (
        <div className='max-w-6xl mx-auto'>
        <div className='text-center p-20 bg-white rounded-lg shadow'>
         <h3 className='text-xl md:text-3xl font-bold'>No Data Here</h3>
         <Link to={'/'} className='btn mt-4 bg-[#FFF] font-bold text-[#244D3F]'>Go Back Home</Link>
        </div> 
         <div className='flex justify-center'>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend />
      <Tooltip />
    </PieChart>
         </div>
        </div>
    );
};

export default Stats;