import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { CallContext } from '../../context/CallContext';

const Stats = () => {
  const { call } = useContext(CallContext);
    const data = [
        { name: 'Call', value: call?.filter(i => i.actionType === 'Call').length || 0, fill: '#244D3F' },
        { name: 'Text', value: call?.filter(i => i.actionType === 'Text').length || 0, fill: '#7E35E1' },
        { name: 'Video', value: call?.filter(i => i.actionType === 'Video').length || 0, fill: '#37A163' }
    ];
    return (
        <div className='max-w-6xl mx-auto'>
           <h3 className='text-xl md:text-4xl font-extrabold mb-4'>Friendship Analytics </h3>
        {call && call.length === 0? (<div className='text-center p-20 bg-white rounded-lg shadow'>
         <h3 className='text-xl md:text-3xl font-bold'>No Data Here</h3>
         <Link to={'/'} className='btn mt-4 bg-[#FFF] font-bold text-[#244D3F]'>Go Back Home</Link>
        </div> )
        :( <div className='flex justify-center bg-white p-5'>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
       
        cornerRadius="50%"
        fill="#8884d8"
       
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend />
      <Tooltip />
    </PieChart>
         </div>)}
        </div>
    );
};

export default Stats;