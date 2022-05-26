import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
      const imageStorageKey = "e13db2847aef26aa802f8fcd3056d297";
    
      const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              const img = result.data.url;
              const rating = {
                name: data.name,
                description: data.description,
                rating: data.rating,
                img: img,
              };
    
              fetch("https://radiant-lake-65921.herokuapp.com/review", {
                method: "POST",
                headers: {
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                  "content-type": "application/json",
                },
                body: JSON.stringify(rating),
              })
                .then((res) => res.json())
                .then((inserted) => {
                  if (inserted.insertedId) {
                    toast.success("A review has been added");
                    reset();
                  }
                });
            }
          });
      };
    return (
        <div>
        <h2 className="text-2xl mb-5 ml-10">Make a review</h2>
        <div className="ml-10">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input w-full max-w-xs input-bordered mb-2 input-success"
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.productName?.type === "required" && (
              <span className="text-red-400 mb-3">
                "Name is required"
              </span>
            )}

            <div class="rating py-5">
            <input type="radio" value="1" {...register("rating", { required: true })} class="mask mask-star-2 bg-orange-400" />
            <input type="radio" value="2" {...register("rating", { required: true })} class="mask mask-star-2 bg-orange-400" />
            <input type="radio" value="3" {...register("rating", { required: true })} class="mask mask-star-2 bg-orange-400" />
            <input type="radio" value="4" {...register("rating", { required: true })} class="mask mask-star-2 bg-orange-400" />
            <input type="radio" value="5" {...register("rating", { required: true })} class="mask mask-star-2 bg-orange-400" checked />
            </div>
            <input
              className="textarea w-full max-w-xs input-bordered mb-2 input-success"
              type="text"
              placeholder="Your Review"
              {...register("description", { required: true })}
            />
            {errors.description?.type === "required" && (
              <span className="text-red-400 mb-3">"Description is required"</span>
            )}
            <p className='mt-3'>Please provide your Profile picture</p>
            <input
              className="input w-full max-w-xs input-bordered mb-2 input-success p-1"
              type="file"
              placeholder="Product description"
              {...register("image", { required: true })}
            />
            {errors.image?.type === "required" && (
              <span className="text-red-400 mb-3">"Image is required"</span>
            )}
  
            <input
              className="btn btn-accent input w-full max-w-xs btn-1"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
};

export default AddReview;