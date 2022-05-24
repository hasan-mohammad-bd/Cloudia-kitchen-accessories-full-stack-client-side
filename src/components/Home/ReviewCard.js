import React from "react";

const ReviewCard = ({ review }) => {
  const { name, description, rating, img } = review;
  return (
    <div>
      <p>name {name}</p>
      <p>review: {description}</p>
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
    </div>
  );
};

export default ReviewCard;
