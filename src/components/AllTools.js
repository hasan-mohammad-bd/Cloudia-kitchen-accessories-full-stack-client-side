import React from 'react';
import AllTool from './AllTool';
import Loading from './Loading';
import {
    useQuery
  } from 'react-query';

const AllTools = () => {
    const {data:tools, isLoading, refetch} = useQuery('product', ()=> fetch('http://localhost:5000/product', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='h-20'>
            <h2 className='text-center'>Our all Kitchen Tools</h2>
            <div>
                {
                    tools.slice(-6).reverse().map(tool => <AllTool tool={tool} key={tool._id} refetch={refetch}></AllTool>)
                }
            </div>
        </div>
    );
};

export default AllTools;