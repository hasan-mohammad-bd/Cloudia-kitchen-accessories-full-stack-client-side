import React from 'react';
import AllTool from './AllTool';
import Loading from './Loading';
import {
    useQuery
  } from 'react-query';

const AllTools = () => {
    const {data:tools, isLoading, refetch} = useQuery('shopPorduct', ()=> fetch('https://radiant-lake-65921.herokuapp.com/product', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-3xl mt-16'>All Our Kitchen Tools</h2>
            <div className='line w-32 mx-auto mt-2 mb-16'></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    tools.reverse().map(tool => <AllTool tool={tool} key={tool._id} refetch={refetch}></AllTool>)
                }
            </div>
        </div>
    );
};

export default AllTools;