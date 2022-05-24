import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import ReviewCard from './ReviewCard';

const Review = () => {
 const [reviews, setReviews]= useState([]);
 useEffect(()=>{
     fetch('http://localhost:5000/review')
     .then(res => res.json())
     .then(data => setReviews(data))
     
 },[])
    return (
        <div className='h-20'>
            <h2 className='text-center'>Our all Kitchen Tools</h2>
            <div>
                {
                    reviews?.slice(-6).reverse().map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;