import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrderList = ({ order, index, setDeletingProduct }) => {
    const { product, booked, totalPrice, img, _id, status } = order;
    const navigate = useNavigate()
  
 
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
      <td>{booked} pcs</td>
      <td>${totalPrice}</td>
      <td>
        {
        !order.paid && <label onClick={()=>setDeletingProduct(order)} htmlFor="delete-confirm-book-modal" class="btn btn-sm btn-circle mb-3 right-2 top-2 btn-error">X</label>
        }
      </td>

      <td>{!order.paid && <button onClick={()=>{navigate(`/dashboard/payment/${_id}`)}} className='btn btn-success mb-3'>Pay</button>}
      {order.paid && <div>
        {
            !status ? <p className='text-green-300'>Paid</p> : <p className='text-green-700'>Shipped</p>
        }
        <p className='text-success'>Transaction ID:  {order.transactionId}</p>

          
          </div>}
      </td>

    </tr>
    );
  };

export default MyOrderList;