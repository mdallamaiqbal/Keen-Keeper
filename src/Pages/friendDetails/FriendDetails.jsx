
import { Navigate, useParams } from 'react-router';
import useFriendHooks from '../../components/hooks/useFriendHooks';
import { FadeLoader } from 'react-spinners';
import { TiBell } from 'react-icons/ti';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { BsCameraVideo, BsChatText } from 'react-icons/bs';
import { useContext } from 'react';
import { CallContext } from '../../context/CallContext';
import { toast } from 'react-toastify';
const FriendDetails = () => {
    const {id} = useParams();
     const {cards,loading} = useFriendHooks();
     const detail = cards.find(card => String(card.id) === id );
    const {call,setCall} = useContext(CallContext);
     const handleAction = (type)=>{
      const newAction ={
         ...detail,
         actionType: type,
         date: new Date().toLocaleString()
      }
      setCall([...call, newAction]);
      toast.success(`${detail.name} added to time line`,
         {
            icon:{
               Call: <MdOutlinePhoneInTalk />,
               Text: <BsChatText  />,
               Video: <BsCameraVideo />
            }[type]
         }
      )
     }
     if(loading){
        return <p className='flex justify-center'> <FadeLoader color='#244D3F' /> </p>
     }
    return (
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-6 '>
         <div className='max-w-96 md:ml-10'>
            <div className='p-6 rounded-lg bg-white shadow text-center'>
        <img src={detail.picture} className='mx-auto transition duration-300 hover:scale-110' alt="" />
        <h3 className='text-2xl font-semibold mt-4'>{detail.name}</h3>
        <div className='flex gap-2 my-2 justify-center'>
            {
            detail.tags?.map((tag,ind)=> <p className='badge text-sm bg-[#CBFADB] text-[#244D3F]' key={ind}>{tag}</p>)
            }
        </div>
        <p className={`badge text-white ${detail.status==='Almost Due' &&'bg-[#EFAD44]'} ${detail.status==='Overdue'
            &&'bg-[#EF4444]'} ${detail.status==='On-Track' &&'bg-[#244D3F]'} `}>{detail.status}</p>
            <p className='text-[#64748B] my-2  font-medium'>"{detail.bio}"</p>
            <p className='text-sm text-[#64748B]'>Email: {detail.email}</p>
         </div>
          <div className='mt-4 flex flex-col gap-4'>
            <h4 className='py-4 bg-white px-24 flex justify-center items-center gap-2 font-medium'><TiBell className="-translate-y-0.5 text-2xl"/> Snooze 2 weeks</h4>
            <h4 className='py-4 bg-white px-24 flex justify-center items-center gap-2 font-medium'><FiArchive className="-translate-y-0.5 text-xl"/> Archive</h4>
            <h4 className='py-4 bg-white px-24 flex justify-center items-center gap-2 font-medium text-red-500'><RiDeleteBinLine className="-translate-y-0.5 text-xl"/> Delete</h4>
         </div>
         </div>
         <div>
            <div className='grid grid-cols-3 gap-1 sm:gap-4'>
                <div className='bg-white px-4 py-3 sm:py-6 text-center rounded-lg'>
                <h3 className='text-xl md:text-3xl text-[#244D3F] font-semibold'>{detail.days_since_contact}</h3>
               <p className='text-[#64748B] mt-2'>Days Since Contact</p>
            </div>
            <div className='bg-white px-4 py-3 sm:py-6 text-center rounded-lg'>
                <h3 className='text-xl md:text-3xl text-[#244D3F] font-semibold'>{detail.goal}</h3>
               <p className='text-[#64748B] mt-2'>Goal Days</p>
            </div>
            <div className='bg-white px-4 py-3 sm:py-6 text-center rounded-lg'>
                <h3 className='text-xl md:text-3xl text-[#244D3F] font-semibold'>{detail.next_due_date}</h3>
               <p className='text-[#64748B] mt-2'>Next Due</p>
            </div>
            </div>
            <div className='bg-white px-4 py-3 sm:py-6 rounded-lg my-6'>
               <div className='flex justify-between items-center mb-5'>
                 <h3 className='text-xl font-medium text-[#244D3F]'>Relationship Goal</h3>
                 <button className='btn bg-[#F8FAFC]'>Edit</button>
               </div>
               <h4 className='text-[#64748B]'>Connect every <span className='text-black font-bold'>{detail.goal} Days</span></h4>
            </div>
            <div className='bg-white px-4 py-3 sm:py-6 rounded-lg my-6'>
                <h3 className='text-xl text-[#244D3F] font-medium mb-4'>Quick Check-In</h3>
               <div className='grid grid-cols-3 gap-1 sm:gap-4 '>
                <div onClick={()=>handleAction('Call')} className='bg-[#F8FAFC] px-4 py-3 sm:py-6 text-center rounded-lg transition duration-300 hover:shadow-lg'>
                <h3 className='text-xl md:text-3xl text-[#244D3F] font-extrabold flex justify-center '><MdOutlinePhoneInTalk /></h3>
                <p className='text-[#64748B] mt-2'>Call</p>
               </div>
                <div onClick={()=>handleAction('Text')} className='bg-[#F8FAFC] px-4 py-3 sm:py-6 text-center rounded-lg transition duration-300 hover:shadow-lg'>
                <h3 className='text-xl md:text-3xl text-[#244D3F] font-extrabold flex justify-center '><BsChatText /></h3>
                <p className='text-[#64748B] mt-2'>Text</p>
               </div>
                <div onClick={()=>handleAction('Video')} className='bg-[#F8FAFC] px-4 py-3 sm:py-6 text-center rounded-lg transition duration-300 hover:shadow-lg '>
                <h3 className='text-xl md:text-3xl text-[#244D3F] font-extrabold flex justify-center '><BsCameraVideo /></h3>
                <p className='text-[#64748B] mt-2'>Video</p>
               </div>
               </div>
            </div>
         </div>
        </div>
    );
};

export default FriendDetails;