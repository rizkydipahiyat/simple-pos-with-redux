import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  return (
    <nav className="md:container mx-auto md:max-w-full md:px-14 sticky top-0 z-10 bg-indigo-500 text-white">
      <div className="flex items-center justify-between h-16">
        <div className="font-bold text-lg">SHOP</div>
        <div className="flex gap-x-2">
          <IoCartOutline size={24} />
          <span>{totalCart}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
