import React from "react";
import Loading from "../Loading";
import ListOfTools from "./ListOfTools";
import { useState } from "react";
import { useQuery } from "react-query";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageProduct = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("productList", () =>
    fetch("https://kitchen-accessroies-backend-production.up.railway.app/product",{
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
                <th>Available Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {tools.reverse().map((tool, index) => (
                <ListOfTools
                  setDeletingProduct={setDeletingProduct}
                  tool={tool}
                  key={tool._id}
                  index={index}
                  refetch={refetch}
                ></ListOfTools>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {
          deletingProduct && <DeleteConfirmModal deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeleteConfirmModal>
      }
    </div>
  );
};

export default ManageProduct;
