import React from 'react';
import {
    useQuery
  } from 'react-query';
import Loading from '../Loading';
import MakeAdminList from './MakeAdminList';

const MakeAdmin = () => {
    const {data:users, isLoading, refetch} = useQuery('product', ()=> fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    console.log(users);
    return (
<div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>

        <th>email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
        {
            users.map((user, index) => <MakeAdminList refetch={refetch} user={user} key={user._id} index={index}></MakeAdminList>)
        }

    </tbody>
  </table>
</div>
    );
};

export default MakeAdmin;