import React from 'react';
import Hero from '../../components/shared/Hero';
import Count from '../../components/shared/Count';
import FriendCard from '../../components/friendCard/FriendCard';

const Home = () => {
    return (
        <div>
            <Hero />
            <Count />
            <FriendCard />
        </div>
    );
};

export default Home;