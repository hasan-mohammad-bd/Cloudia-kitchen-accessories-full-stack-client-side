import React from 'react';
import Banner from './Banner';
import Review from './Review';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <Summary></Summary>
        </div>
    );
};

export default Home;