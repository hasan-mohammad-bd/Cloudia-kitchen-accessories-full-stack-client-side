import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading';
import DeletingOrderConfirmModal from './DeletingOrderConfirmModal';
import MyOrderList from './MyOrderList';

const MyOrder = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [user] = useAuthState(auth)
    const {
      data: myOrders,
      isLoading,
      refetch,
    } = useQuery("myOrderList", () =>
      fetch(`https://kitchen-accessroies-backend-production.up.railway.app/book/${user.email}`,{
          method: 'GET',
          headers:{
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      }).then((res) => res.json())
    );
  
    if (isLoading) {
      return <Loading></Loading>;
    }


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
                  <th>Name</th>
                  <th>Booked Quantity</th>
                  <th>Total Price</th>
                  <th>Delete</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {myOrders.reverse().map((order, index) => (
                  <MyOrderList
                    setDeletingProduct={setDeletingProduct}
                    order={order}
                    key={order._id}
                    index={index}
                    refetch={refetch}
                  ></MyOrderList>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {
            deletingProduct && <DeletingOrderConfirmModal deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeletingOrderConfirmModal>
        }
      </div>
    );
};

export default MyOrder;