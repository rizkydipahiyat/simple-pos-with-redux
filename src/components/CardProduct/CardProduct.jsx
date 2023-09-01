import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = ({ id, title, image, desc, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-indigo-500 p-2 rounded-md text-white gap-y-2">
      <img src={image} alt={title} className="w-full h-60 rounded-md" />
      <p className="font-medium text-lg">{title}</p>
      <span className="font-normal text-md">IDR {price}</span>
      <div
        onClick={() => dispatch(addToCart({ id, title, image, price, qty: 1 }))}
        className="flex justify-center items-center gap-2 bg-slate-200 text-indigo-500 cursor-pointer font-medium p-2 mt-2 rounded-md">
        <span>ADD TO CART</span>
        <IoCartOutline size={22} />
      </div>
    </div>
  );
};

export default CardProduct;
