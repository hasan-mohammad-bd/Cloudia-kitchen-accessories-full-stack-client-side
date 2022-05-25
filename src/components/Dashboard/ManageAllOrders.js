import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import DeletingManageAllOrder from './DeletingManageAllOrder';
import ManageAllOrderList from './ManageAllOrderList';

const ManageAllOrders = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const {
      data: allOrders,
      isLoading,
      refetch,
    } = useQuery("allOrders", () =>
      fetch(`http://localhost:5000/book`,{
          method: 'GET',
          headers:{
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      }).then((res) => res.json())
    );
  
    if (isLoading) {
      return <Loading></Loading>;
    }

    console.log(deletingProduct);
    return (
        <div className="h-20">
        <h2 className="text-center text-2xl mb-5">All Kitchen Tools</h2>
        <div>
          <div class="overflow-x-auto">
            <table class="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Booked By</th>
                  <th>Booked Quantity</th>
                  <th>Total Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {allOrders.reverse().map((order, index) => (
                  <ManageAllOrderList
                    setDeletingProduct={setDeletingProduct}
                    order={order}
                    key={order._id}
                    index={index}
                    refetch={refetch}
                  ></ManageAllOrderList>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {
            deletingProduct && <DeletingManageAllOrder deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeletingManageAllOrder>
        }
      </div>
    );
};

export default ManageAllOrders;