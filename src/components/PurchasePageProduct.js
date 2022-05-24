
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "./Loading";

const PurchasePageProduct = ({ product }) => {
    const [user] = useAuthState(auth)

    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();

      const {data: purchaeUser, isLoading, refetch} = useQuery('purchaseProfile', ()=> fetch(`http://localhost:5000/user/${user.email}`,{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    console.log(purchaeUser);

  const { name, price, quantity, img, description, _id } = product;

      const onSubmit =  async(data) =>{
          const bookedQuantity = data.book

          console.log(purchaeUser.address);
          if(parseInt(quantity) >= parseInt(bookedQuantity)){
            if(parseInt(bookedQuantity) >= 5){
                if(purchaeUser.email && purchaeUser.address && purchaeUser.phone && purchaeUser.Location){

                    const booking = {
                        product: name,
                        booked: bookedQuantity,
                        totalPrice: bookedQuantity * price,
                        img: img,
                        productId: _id,
                        email: purchaeUser.email,
                        address: purchaeUser.address,
                        location: purchaeUser.location,
                        phone: purchaeUser.phone
                    }
                  }
                  else{
                      toast.error('Please give your address/phone details')
                  }
            }
            else{
                toast.error('Minium booking quantity is 5')
            }

          }
          else{
              toast.error(`You can't book more than available ${quantity} pcs`)
          }

      }

  return (
    <div class="hero min-h-screen">
      <div class="hero-content w-full flex-col lg:flex-row justify-around">
        <img src={img} class="w-2/5 rounded-lg shadow-2xl" />
        <div className="w-2/5">
          <h1 class="text-5xl font-bold">{name}</h1>
          <p class="py-2">{description}</p>
          <p class="py-2">ID: {_id}</p>
          <p class="py-2">Minium Quantity: 5</p>
          <p class="py-2">Available Quantity: {quantity}</p>
          <p class="py-2">price: {price} </p>
          <div className="rounded-lg shadow-2xl p-5 m-5 w-full">
            <p>Shipping Address:</p>
            <p>Receiver Name: {user.displayName}</p>
            <p>Receiver email: {purchaeUser.email}</p>
            <p>Receiver Address: {purchaeUser.address}</p>
            <p>Receiver phone: {purchaeUser.phone}</p>
            <button onClick={()=>{navigate('/dashboard/editprofile')}} className="btn btn-success">Update Address</button>
          </div>
          <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input w-20 max-w-xs input-bordered input-success"
            type="number"
            defaultValue="5"
            min="5"
            placeholder="Your booking quantity"
            {...register("book", { required: true })}
          />
          {errors.book?.type === "required" && (
            <span className="text-red-400 mb-3">"Please insert your booking quantity"</span>
          )}
          <p className="ml-1 mr-3">pcs</p>
             <input
            className="btn btn-accent input w-full max-w-xs"
            type="submit"
            value="Book"

          />
          </form>
          <button class="btn btn-primary w-full mt-10">Proceed for Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePageProduct;
