import React from "react";
import { toast } from "react-toastify";

const MakeAdminList = ({ index, user, refetch }) => {

  const { email, role } = user;
  const makeAdmin =()=>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
        method:'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
        if(res.status === 403){
            toast.error("Failed to make admin")
        }
        return res.json()
    })
    .then(data =>{
        if(data.modifiedCount){
            refetch();
            toast.success("Successfully made an admin");
  
        }

    })
}
  const removeAdmin =()=>{
    fetch(`http://localhost:5000/user/adminRemove/${email}`,{
        method:'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
        if(res.status === 403){
            toast.error("Failed to remove admin")
        }
        return res.json()
    })
    .then(data =>{
        if(data.modifiedCount){
            refetch();
            toast.success("Successfully remove an admin");
  
        }

    })
}
  
  return (
    <tr>
      <td>{index + 1}</td>

      <td>{email} {role === 'admin' && <div class="badge badge-accent">admin</div>}</td>
      <td>
      {role !== 'admin'? <button onClick={()=>{makeAdmin()}} class="btn btn-outline btn-success">Make Admin</button> : <button onClick={()=>{removeAdmin()}} class="btn btn-outline btn-error">Remove Admin</button>}
      </td>
    </tr>
  );
};

export default MakeAdminList;
