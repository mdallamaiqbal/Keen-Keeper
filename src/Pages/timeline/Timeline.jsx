import React, { useContext, useState } from 'react';
import { CallContext } from '../../context/CallContext';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { BsCameraVideo, BsChatText } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router';

const Timeline = () => {
const {call} = useContext(CallContext);
const [filter,setFilter] = useState('All');
const filterData = filter === 'All' ? call : call?.filter(item=>item.actionType === filter)
return (
<div className='max-w-6xl mx-auto pb-20 '>
    <div className='flex flex-col gap-5'>
        <h3 className='text-xl md:text-5xl font-extrabold'>Timeline </h3>
        <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn bg-[#FFF] m-1 flex items-center w-32 justify-between">{filter} <FaChevronDown /></div>
            <ul tabIndex="-1" className="dropdown-content menu bg-[#FFF] rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={()=> setFilter('All')}>All</a></li>
                <li><a onClick={()=> setFilter('Call')}>Call</a></li>
                <li><a onClick={()=> setFilter('Text')}>Text</a></li>
                <li><a onClick={()=> setFilter('Video')}>Video</a></li>
            </ul>
        </div>
      {
       filterData &&  filterData.length === 0 ? <div className='text-center p-20 bg-white rounded-lg shadow'>
         <h3 className='text-xl md:text-3xl font-bold'>No Interactions Yet</h3>
         <Link to={'/'} className='btn mt-4 bg-[#FFF] font-bold text-[#244D3F]'>Go Back Home</Link>
        </div> 
       : (
        filterData?.map((card,ind)=>{
        return <div key={ind} className='flex items-center gap-4 bg-white rounded-lg shadow p-4'>
            <div className='text-2xl mt-1'>
                {card.actionType === 'Call' &&
                <MdOutlinePhoneInTalk />}
                {card.actionType === 'Text' &&
                <BsChatText />}
                {card.actionType === 'Video' &&
                <BsCameraVideo />}
            </div>
            <div>
                <h4 className='font-semibold text-xl'>{card.actionType} with <span
                        className='font-medium text-gray-500 text-lg'>{card.name}</span></h4>

                <span className='text-gray-500'>{card.date}</span>
            </div>
        </div>
        })
        )
      }
    </div>
</div>
);
};

export default Timeline;