import React, { useState } from "react";

const Rating = ({ maxStar }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (star) => {
    setRating((prevRating) => (star > prevRating ? star : prevRating));
  };

  return (
    <div className="w-full h-dvh flex items-center justify-center column text-center">
      <div>
        <p>Please rate:</p>
        {[...Array(maxStar)].map((_, index) => (
          <span
            key={index + 1}
            onClick={() => handleStarClick(index + 1)}
            style={{
              cursor: "pointer",
              fontSize: "50px",
              color: index + 1 <= rating ? "#F7A031" : "gray",
            }}
          >
            ★
          </span>
        ))}
        <p>Selected rating score: {rating}</p>
      </div>
    </div>
  );
};

export default Rating;
