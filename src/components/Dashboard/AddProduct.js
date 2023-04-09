import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Loading";
import '../../customStyle.css';

const AddProduct = () => {
  const [spinner, setSpinner] = useState(true);

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
          const product = {
            name: data.productName,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            img: img,
          };

          fetch("https://kitchen-accessroies-backend-production.up.railway.app/product", {
            method: "POST",
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("A product has been added");
                reset();
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl mb-5 ml-10">Add a product </h2>
      <div className="ml-10">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Product name"
            {...register("productName", { required: true })}
          />
          {errors.productName?.type === "required" && (
            <span className="text-red-400 mb-3">
              "Product name is required"
            </span>
          )}
          <input
            className="textarea w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Product description"
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" && (
            <span className="text-red-400 mb-3">"Description is required"</span>
          )}
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="number"
            placeholder="Product Price"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && (
            <span className="text-red-400 mb-3">"Price is required"</span>
          )}
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="number"
            placeholder="Product Quantity"
            {...register("quantity", { required: true })}
          />
          {errors.quantity?.type === "required" && (
            <span className="text-red-400 mb-3">
              "Product quantity is required"
            </span>
          )}

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
            className="btn btn-accent input w-full max-w-xs"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
