import React from 'react';
import {useState, useEffect} from 'react';
import Tool from './Tool';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query';
import Loading from '../Loading';

const Tools = () => {

    const {data:tools, isLoading, refetch} = useQuery('homeProduct', ()=> fetch('https://kithen.onrender.com/product').then(res => res.json()))


    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-3xl'>New Arrivals</h2>
            <div className='line w-24 mx-auto mt-1 mb-16'></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    tools?.slice(-6).reverse().map(tool => <Tool tool={tool} key={tool._id} refetch={refetch}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;