
import { FadeLoader } from 'react-spinners';
import Card from '../UI/Card';
import useFriendHooks from '../hooks/useFriendHooks';

const FriendCard = () => {
   const {cards,loading} = useFriendHooks()
    return (
        <div className='max-w-6xl mx-auto'>
            <h3 className='text-xl md:text-2xl font-semibold mb-4'>Your Friends</h3>

            {
                loading ? (<p className='flex justify-center'><FadeLoader color='#244D3F' /></p>) 
                : (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    cards.map((card,ind)=> <Card key={ind} card={card} />)
                }
                 </div>)

            }
        </div>
    );
};

export default FriendCard;