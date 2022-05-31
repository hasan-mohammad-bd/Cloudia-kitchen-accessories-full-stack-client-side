import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const navigate = useNavigate();
  const { name, price, quantity, img, description, _id } = tool;
  return (
    <div class="card w-full shadow-xl product-card flex flex-col justify-between bg-white">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="flex justify-between p-5">
        <h2 class="card-title">{name}</h2>
        <p className="font-bold text-xl">Price: ${price}</p>
      </div>
      <div class="p-5">
        <p className="mb-2">{description}</p>
        <p className="mb-2">Available Quantity: {quantity} pcs</p>
        <p className="mb-2">Minium Order Quantity: 5 pcs</p>
        <button
          className="my-3 btn-1"
          onClick={() => {
            navigate(`/purchase/${_id}`);
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Tool;
