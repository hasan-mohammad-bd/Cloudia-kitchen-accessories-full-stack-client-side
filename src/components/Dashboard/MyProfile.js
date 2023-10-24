import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading';

const MyProfile = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const {data: dUser, isLoading, refetch} = useQuery('myProfile', ()=> fetch(`https://kithen.onrender.com/user/${user.email}`,{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div class="card w-full  shadow-xl product-card flex flex-col justify-between">
        <figure>
          {dUser.img? <div class="avatar online">
  <div class="w-24 rounded-full">
    <img src={dUser.img}/>
  </div>
</div> : <div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span class="text-3xl">K</span>
  </div>
</div> }
        </figure>
        <div className="flex justify-between p-5">
          <h2 class="card-title">Name: {user?.displayName}</h2>
        </div>
        <div class="p-5">
          <p className="mb-2">Address: {dUser.address && dUser.address}</p>
          <p className="mb-2">Location: {dUser.location && dUser.location}</p>
          <p className="mb-2">Phone: {dUser.phone && dUser.phone}</p>
          <p className="mb-2">Linkdin: {dUser.linkdin && dUser.linkdin}</p>
          <button className='btn-1' onClick={()=>navigate('/dashboard/editprofile')}>Edit your profile</button>
        </div>
      </div>
    );
};

export default MyProfile;