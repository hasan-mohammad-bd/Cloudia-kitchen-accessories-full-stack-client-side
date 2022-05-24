import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import PurchasePageProduct from './PurchasePageProduct';

const Purchase = () => {
    const {id} = useParams()
    const {data: product, isLoading, refetch} = useQuery('purchaseProduct', ()=> fetch(`http://localhost:5000/product/${id}`,{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <PurchasePageProduct product={product}></PurchasePageProduct>
        </div>
    );
};

export default Purchase;