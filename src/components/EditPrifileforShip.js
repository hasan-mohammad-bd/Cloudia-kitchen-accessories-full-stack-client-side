import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';


const EditProfileForShip = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
      const imageStorageKey = "8d799c0a039c8e9eb8a5863caa8d7d22";
    
      const onSubmit = async (data) => {
        const profile = {
            name: user.displayName,
            email: user.email,
            address: data.address,
            location: data.location,
            phone: data.phone

          };

          fetch(`http://localhost:5000/profile/${user.email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(profile),
          })
            .then((res) => res.json())
            .then((inserted) => {
                console.log(inserted);
              if (inserted.matchedCount || inserted.modifiedCount) {
                toast.success("Profile has been updated");
                reset();
                navigate(-1);

              }
            });
      }





    return (
<div>
    <h2 className='text-2xl text-center mb-11'>Edit Profile</h2>
<div className='flex justify-center items-center'>

<div className="ml-10">
  <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
    <input
      className="input w-full max-w-xs input-bordered mb-2 input-success"
      type="text"
      value={user.displayName}
      readOnly
      {...register("name", { required: true })}
    />
    {errors.name?.type === "required" && (
      <span className="text-red-400 mb-3">
        " Name is required"
      </span>
    )}
    <input
      className="input md:w-80 max-w-xs input-bordered mb-2 input-success"
      type="email"
      value={user.email}
      readOnly
      {...register("email", { required: true })}
    />
    {errors.email?.type === "required" && (
      <span className="text-red-400 mb-3">
        "email is required"
      </span>
    )}
    <input
      className="textarea md:w-80 mx-auto max-w-xs input-bordered mb-2 input-success"
      type="text"
      placeholder="address"
      {...register("address", { required: true })}
    />
    {errors.address?.type === "required" && (
      <span className="text-red-400 mb-3">"Address is required"</span>
    )}
    <input
      className="textarea md:w-80 max-w-xs input-bordered mb-2 input-success"
      type="text"
      placeholder="location"
      {...register("location", { required: true })}
    />
    {errors.location?.type === "required" && (
      <span className="text-red-400 mb-3">"Location is required"</span>
    )}
    <input
      className="input md:w-80 max-w-xs input-bordered mb-2 input-success"
      type="number"
      placeholder="phone"
      {...register("phone", { required: true })}
    />
    {errors.phone?.type === "required" && (
      <span className="text-red-400 mb-3">"Phone number is required"</span>
    )}


    <input
      className="btn btn-accent input w-full max-w-xs"
      type="submit"
    />
  </form>
</div>
</div>
</div>
    );
};

export default EditProfileForShip;