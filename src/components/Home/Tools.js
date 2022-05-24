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

    const {data:tools, isLoading, refetch} = useQuery('homeProduct', ()=> fetch('http://localhost:5000/product').then(res => res.json()))


    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h2 className='text-center'>Our all Kitchen Tools</h2>
            <div>
                {
                    tools?.slice(-6).reverse().map(tool => <Tool tool={tool} key={tool._id} refetch={refetch}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;