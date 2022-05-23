import React from 'react';
import Loading from '../Loading';
import ListOfTools from './ListOfTools';
import {
    useQuery,
  } from 'react-query';

const ManageProduct = () => {
    const {data:tools, isLoading, refetch} = useQuery('product', ()=> fetch('http://localhost:5000/product').then(res => res.json()))


    if(isLoading){
        return <Loading></Loading>
    }
    console.log(tools);

    return (
        <div className='h-20'>
            <h2 className='text-center'>Our all Kitchen Tools</h2>
            <div>
            <div class="overflow-x-auto">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Available Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
                    tools.reverse().map((tool,index) => <ListOfTools tool={tool} key={tool._id} index={index} refetch={refetch}></ListOfTools>)
                }
        </tbody>
      </table>
    </div>

            </div>
        </div>
    );
};

export default ManageProduct;