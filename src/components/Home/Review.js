import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="w-4/5 mx-auto mb-16">
      <h2 className="text-center text-3xl mt-16">Customer Review</h2>
      <div className="line w-32 mx-auto mt-2 mb-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews
          ?.slice(-6)
          .reverse()
          .map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
      </div>
    </div>
  );
};

export default Review;
