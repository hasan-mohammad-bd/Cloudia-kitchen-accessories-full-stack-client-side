import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const EditMyProfile = () => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    
      const imageStorageKey = "e13db2847aef26aa802f8fcd3056d297";
    
      const onSubmit = async (data) => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image )
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
          .then((result) => {
            if (result.success) {
              const img = result.data.url;
              const profile = {
                name: user.displayName,
                email: user.email,
                address: data.address,
                location: data.location,
                phone: data.phone,
                linkdin: data.linkdin,
                img: img
              };
    
              fetch(`https://radiant-lake-65921.herokuapp.com/profile/${user.email}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                  "content-type": "application/json",
                },
                body: JSON.stringify(profile),
              })
                .then((res) => res.json())
                .then((inserted) => {

                  if (inserted.matchedCount || inserted.modifiedCount) {
                    toast.success("Profile has been updated");
                    reset();
                    navigate('/dashboard/myprofile')
                    

                  }
                });
            }
          });
      };
    return (
<div>
      <h2 className="text-2xl mb-5 ml-10">Edit Profile</h2>
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
            className="input w-full max-w-xs input-bordered mb-2 input-success"
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
            className="textarea w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="address"
            {...register("address", { required: true })}
          />
          {errors.address?.type === "required" && (
            <span className="text-red-400 mb-3">"Address is required"</span>
          )}
          <input
            className="textarea w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="location"
            {...register("location", { required: true })}
          />
          {errors.location?.type === "required" && (
            <span className="text-red-400 mb-3">"Location is required"</span>
          )}
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="number"
            placeholder="phone"
            {...register("phone", { required: true })}
          />
          {errors.phone?.type === "required" && (
            <span className="text-red-400 mb-3">"Phone number is required"</span>
          )}
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="linkdin URL Link"
            {...register("linkdin", { required: true })}
          />
          {errors.linkdin?.type === "required" && (
            <span className="text-red-400 mb-3">
              "Linkdin URL link is required"
            </span>
          )}

          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success p-1"
            type="file"
            placeholder="Upload profile picture"
            {...register("image", { required: true })}
          />
          {errors.image?.type === "required" && (
            <span className="text-red-400 mb-3">"Image is required"</span>
          )}

          <input
            className="btn btn-accent btn-1 input w-full max-w-xs"
            type="submit"
          />
        </form>
      </div>
    </div>
    );
};

export default EditMyProfile;