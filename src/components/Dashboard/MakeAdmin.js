import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    useQuery
  } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading';
import MakeAdminList from './MakeAdminList';

const MakeAdmin = () => {
  const [user1, loading, error] = useAuthState(auth);
  const [singleUser, setSingleUser] = useState()
  console.log(singleUser?.email);

  useEffect(()=>{
    fetch(`http://localhost:5000/user/${user1.email}`)
    .then(res => res.json())
    .then(userData => setSingleUser(userData))
  },[])
    const {data:users, isLoading, refetch} = useQuery('makeAdmin', ()=> fetch('http://localhost:5000/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }





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
            users.map((user, index) => <MakeAdminList singleUser={singleUser} user1={user1} refetch={refetch} user={user} key={user._id} index={index}></MakeAdminList>)
        }

    </tbody>
  </table>
</div>
    );
};

export default MakeAdmin;