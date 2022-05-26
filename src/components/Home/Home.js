import React from 'react';
import Instagram from '../Instagram';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Review from './Review';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Tools></Tools>
            <Instagram></Instagram>
            <Review></Review>

            <Summary></Summary>
        </div>
    );
};

export default Home;