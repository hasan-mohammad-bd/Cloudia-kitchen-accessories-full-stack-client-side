import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "./Loading";

const PurchasePageProduct = ({ product, id ,refetch}) => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    data: purchaeUser,
    isLoading,
  } = useQuery("purchaseProfile", () =>
    fetch(`https://kitchen-accessroies-backend-production.up.railway.app/user/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }



  const { name, price, quantity, img, description, _id } = product;


  const onSubmit = async (data) => {
    const bookedQuantity = data.book;



    if (parseInt(quantity) >= parseInt(bookedQuantity)) {
      if (parseInt(bookedQuantity) >= 5) {
        if (
          purchaeUser?.email &&
          purchaeUser?.address &&
          purchaeUser?.phone &&
          purchaeUser?.location
        ) {
          const booking = {
            product: name,
            bookedBy: user.displayName,
            booked: bookedQuantity,
            totalPrice: bookedQuantity * price,
            img: img,
            productId: _id,
            email: purchaeUser.email,
            address: purchaeUser.address,
            location: purchaeUser.location,
            phone: purchaeUser.phone,
          };

          fetch(`https://kitchen-accessroies-backend-production.up.railway.app/book`, {
            method: "POST",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(booking),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                
              }
            });

            const remainQuantity = parseInt(quantity) - parseInt(bookedQuantity);




                fetch(`https://kitchen-accessroies-backend-production.up.railway.app/productQuantity/${_id}`,{
                    method:'PUT',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({quantity: remainQuantity})
                })
                .then(res =>  res.json())
                .then(data =>{
 
                    if(data.modifiedCount){
 
                        refetch();
                        reset();
                        toast.success(`Successfully booked ${product.name} `);
              
                    }
            
                })
            
        } else {
          toast.error("Please update address/phone details");
        }
      } else {
        toast.error("Minium booking quantity is 5");
      }
    } else {
      toast.error(`You can't book more than ${quantity} pcs`);
    }
  };

  return (
    <div class="hero min-h-screen">
      <div class="hero-content w-full flex-col lg:flex-row justify-around">
        <img src={img} class="w-2/5 rounded-lg shadow-2xl" />
        <div className="w-2/5">
          <h1 class="text-5xl font-bold">{name}</h1>
          <p class="py-2">{description}</p>
          <p class="py-2">ID: {_id}</p>
          <p class="py-2">Minium Quantity: 5</p>
          <p class="py-2">Available Quantity: {quantity}pcs</p>
          <p class="py-2">price: ${price} </p>
          <div className="rounded-lg shadow-2xl p-5 my-5 w-full">
            <p>Shipping Address:</p>
            <p>Name: {user.displayName}</p>
            <p>Email: {purchaeUser.email}</p>
            <p>Address: {purchaeUser.address}</p>
            <p>Phone: {purchaeUser.phone}</p>
            <button
              onClick={() => {
                navigate("/editprofileship");
              }}
              className="btn btn-success btn-sm btn-1"
            >
              Update Address
            </button>
          </div>
          <form className="flex items-center justify-between" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center">
              <input
              className="input w-20 max-w-xs input-bordered input-success"
              type="number"
              defaultValue="5"
              min="5"
              placeholder="Your booking quantity"
              {...register("book", { required: true })}
            />
            <p className="ml-3">pcs</p>
              </div>
            {errors.book?.type === "required" && (
              <span className="text-red-400 mb-3">
                "Please insert your booking quantity"
              </span>
            )}
            <input
              className="btn btn-accent input w-full max-w-xs btn-1"
              type="submit"
              value="Book"
            />
          </form>
          <button onClick={()=>{navigate('/dashboard/myorder')}} class="btn btn-primary w-full mt-10 btn-1">
            Proceed for Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePageProduct;
