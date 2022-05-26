import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    useQuery
  } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading';
import MakeAdminList from './MakeAdminList';

const MakeAdmin = () => {
  const [user] = useAuthState(auth);
  const [singleUser, setSingleUser] = useState()


  useEffect(()=>{
    fetch(`https://radiant-lake-65921.herokuapp.com/user/${user.email}`)
    .then(res => res.json())
    .then(userData => setSingleUser(userData))
  },[user])

    const {data:allUsers, isLoading, refetch, isFetching} = useQuery(['adminPage',{cacheTimes: 50}, user.email], ()=> fetch('https://radiant-lake-65921.herokuapp.com/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading || isFetching){
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
            allUsers?.map((sUser, index) => <MakeAdminList singleUser={singleUser}  refetch={refetch} sUser={sUser} key={sUser._id} index={index}></MakeAdminList>)
        }

    </tbody>
  </table>
</div>
    );
};

export default MakeAdmin;