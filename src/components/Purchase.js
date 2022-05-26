import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import PurchasePageProduct from './PurchasePageProduct';

const Purchase = () => {
    const {id} = useParams()
    const {data: product, isLoading, refetch} = useQuery('purchaseProduct', ()=> fetch(`https://radiant-lake-65921.herokuapp.com/product/${id}`,{
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
            <PurchasePageProduct product={product} id={id} refetch={refetch}></PurchasePageProduct>
        </div>
    );
};

export default Purchase;