import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0km2DvpcSfFbldZpHNo418SREG3o5oy78wO7zoMHeX1eRDylYWETYGUtNm5XT3MYj7IpDyWpOK2d8IsTvrGuL300xWizEDN8');

const Payment = () => {
    const { id } = useParams();
    const url = `https://radiant-lake-65921.herokuapp.com/booking/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const { product, booked, totalPrice, img, _id, bookedBy } = order;

    return (
        <div className='md:flex '>
            <div class="card w-full md:w-2/4  shadow-xl my-12">
                <div class="flex justify-between p-10">
                    <div className='mr-10'>                      
                        <p className="font-bold">Hello, {bookedBy}</p>
                        <h2 class="text-bold">Please Pay for {product}</h2>
                        <p>Total Order Quantity:{booked}pcs</p>
                        <p>Please pay: ${totalPrice}</p>
                    </div>
                    <div className='avatar'>
                        <div className='w-24 rounded-full'>
                        <img src={img}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card w-full md:w-2/4  shadow-xl my-12 md:mx-5 ">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;