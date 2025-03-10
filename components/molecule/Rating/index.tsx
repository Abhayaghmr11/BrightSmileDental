import React from "react";
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, index) => (
        <IoIosStar key={index} className="text-[#FDD663] w-[19px] h-[19px]" />
      ))}
      {hasHalfStar && (
        <IoIosStarHalf className="text-[#FDD663] w-[19px] h-[19px]" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <IoIosStarOutline
          key={index}
          className="text-[#FDD663] w-[19px] h-[19px]"
        />
      ))}
    </div>
  );
};

export default Rating;
