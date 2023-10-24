import React from 'react';
import { toast } from 'react-toastify';

const ManageAllOrderList = ({ order, index , setDeletingProduct, refetch }) => {
    const { product, booked, totalPrice, img, bookedBy, _id, status } = order;

    const setStatus =()=>{


        fetch(`https://kithen.onrender.com/status/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({status: true})
        })
        .then(res => {
            if(res.status === 403){
                toast.error("Failed to ship")
            }
            return res.json()

        })
        .then(data =>{
            if(data.modifiedCount){
                refetch();
                toast.success(`Successfully shipped ${product}`);
      
            }
    
        })
    }
  
 
    return (
      <tr>
      <td>{index + 1}</td>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img
              src={img}
              alt="kitchen tools"
            />
          </div>
        </div>
      </td>
      <td>{product}</td>
      <td>{bookedBy}</td>
      <td>{booked} pcs</td>
      <td>${totalPrice}</td>
      <td>{
          !order.paid ? <label onClick={()=>setDeletingProduct(order)} htmlFor="delete-confirm-book-all-modal" class="btn btn-alert">Delete</label> : <label onClick={()=>setStatus()} htmlFor="delete-confirm-book-all-modal" disabled={status === true} class="btn btn-success">Ship</label>
          }</td>
      <td>{status? <p className='text-success'>Shipped</p> : <p className='text-red-400'>Pending</p>}</td>
    </tr>
    );
  };

export default ManageAllOrderList;