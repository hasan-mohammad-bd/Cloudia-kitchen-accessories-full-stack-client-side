import React from 'react';
import { toast } from 'react-toastify';

const DeletingManageAllOrder = ({deletingProduct, setDeletingProduct, refetch}) => {


    const handleDelete = () =>{
        const id = deletingProduct._id
        const url = `https://kithen.onrender.com/book/${id}`
        fetch(url, {
            method: 'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`${deletingProduct.product} has been deleted`)
                setDeletingProduct(null);
                refetch()
        
            }

        })

    }
  return (
    <div>
      <input type="checkbox" id="delete-confirm-book-all-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label htmlFor="delete-confirm-book-all-modal" class="btn btn-sm btn-circle absolute mb-3 right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">
            Ary you sure? Do you want to delete <span className="text-red-500">{deletingProduct.product}</span>?
          </h3>
          <div class="modal-action">
            <label onClick={()=>{handleDelete()}} class="btn bg-red-500 border-0">
              Delete
            </label>
            <label htmlFor="delete-confirm-book-all-modal" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingManageAllOrder;