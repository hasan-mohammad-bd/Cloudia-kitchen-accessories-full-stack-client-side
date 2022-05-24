import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading';

const MyProfile = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const {data: dUser, isLoading, refetch} = useQuery('myProfile', ()=> fetch(`http://localhost:5000/user/${user.email}`,{
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
            <h2>Name: {user.displayName}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Address: {dUser.address && dUser.address}</h2>
            <h2>Location: {dUser.location && dUser.location}</h2>
            <h2>Phone: {dUser.phone && dUser.phone}</h2>
            <h2>Linkdin: {dUser.linkdin && dUser.linkdin}</h2>
            <button onClick={()=>navigate('/dashboard/editprofile')}>Edit your profile</button>

        </div>
    );
};

export default MyProfile;