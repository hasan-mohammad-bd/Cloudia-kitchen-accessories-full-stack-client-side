import React from 'react';

const MyOrderList = ({ order, index,_id, setDeletingProduct }) => {
    const { product, booked, totalPrice, img } = order;
  
 
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
      <td><label onClick={()=>setDeletingProduct(order)} htmlFor="delete-confirm-book-modal" class="btn btn-alert">Delete</label></td>
      <td><button>Pay</button></td>
    </tr>
    );
  };

export default MyOrderList;