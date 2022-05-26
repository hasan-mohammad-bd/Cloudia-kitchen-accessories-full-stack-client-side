import React from "react";

const ReviewCard = ({ review }) => {
  const { name, description, rating, img } = review;
  return (
    <div class="card w-full bg-base-100 shadow-xl xm-auto text-center review-card py-5">
        <div class="avatar">
  <div class="w-24 rounded-full mx-auto">
    <img src={img} />
  </div>
</div>
  <div class="card-body">
    <h2 class="card-title mx-auto">{name}</h2>
    <p>{
      rating == 5 && 
      
      <div className="rating">
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400"  />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" checked/>
      </div>
      
      }
      
      </p>
      <p>{
      rating == 4 && 
      
      <div className="rating">
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400"  />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
      </div>
      
      }
      
      </p>
      <p>{
      rating == 3 && 
      
      <div className="rating">
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400"  />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
      </div>
      
      }
      
      </p>
      <p>{
      rating == 2 && 
      
      <div className="rating">
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400"  checked/>
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
  <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
      </div>
      
      }
      
      </p>
      <p>{
      rating === "1" && 
      
      <div className="rating">
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
            <input type="radio" disabled class="mask mask-star-2 bg-orange-400" />
      </div>
      
      }
      
      </p>

    <p>{description}</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>



  );
};

export default ReviewCard;
