import React from 'react';
import { Link } from 'react-router';

const Card = ({card}) => {
return (
<Link to={`/friendDetails/${card.id}`}>
    <div className='p-6 rounded-lg transition duration-300 hover:shadow-lg bg-white shadow text-center'>
        <img src={card.picture} className='mx-auto transition duration-300 hover:scale-110' alt="" />
        <h3 className='text-2xl font-semibold mt-4'>{card.name}</h3>
        <p className='text-sm text-[#64748B]'>{card.days_since_contact}d ago</p>
        <div className='flex gap-2 my-2 justify-center'>
            {
            card.tags?.map((tag,ind)=> <p className='badge text-sm bg-[#CBFADB] text-[#244D3F]' key={ind}>{tag}</p>)
            }
        </div>
        <p className={`badge text-white ${card.status==='Almost Due' &&'bg-[#EFAD44]'} ${card.status==='Overdue'
            &&'bg-[#EF4444]'} ${card.status==='On-Track' &&'bg-[#244D3F]'} `}>{card.status}</p>
    </div>
</Link>
);
};

export default Card;