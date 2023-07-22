import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface FillType {
  value: number | undefined;
  start?: number | undefined;
  end?: number | undefined;
}

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }: Props) {
  const dispatch = useDispatch();
  const [rating] = useState<any>(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    //sending the product as an action to the redux store ... the basket slice
    dispatch(addToBasket(product));
  };
  useEffect(() => {
    console.log(rating);
  });

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>
      <img
        src={image}
        alt=""
        className="h-[200px] w-[200px] object-contain mx-auto"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <p>${price}</p>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="http://localhost:3000/images/imgs/Prime-tag-.png"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto addButton">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
