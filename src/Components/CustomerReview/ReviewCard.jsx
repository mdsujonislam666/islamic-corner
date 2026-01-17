import React from "react";
import error from "../../assets/error404.png";

const CustomerReviewCard = () => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-6 text-center">
      {/* Customer Image */}
      <img
        src={error}
        className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
      />

      {/* Name & Role */}
      <h3 className="text-lg text-black font-semibold">Md Sujon Islam</h3>

        <p>Rating:</p>
        <div className="rating rating-md">
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
        </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm">
        This product is very good
      </p>
    </div>
  );
};

export default CustomerReviewCard;
