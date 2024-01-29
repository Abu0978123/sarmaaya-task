import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

const CartItem = ({item}) => {
  return (
    <div className="flex px-3 p-1 gap-3 md:gap-5  justify-between items-center shadow-sm rounded my-3">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        {/* <image */}
        <Image
          src={item?.image}
          // src="https://res.cloudinary.com/premiumwishes/images/w_800,h_550/f_auto,q_auto/v1656613097/625_262772dee6/625_262772dee6.jpg?_i=AA"
          alt="picture"
          className="rounded-lg pl-2 pt-4 "
          width={120}
          height={120}
        />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg  pl-8 text-black/[0.8]">
            {/* {p.name} */}
            {item?.title}
          </div> 

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black block items-center">
            {/* {p.subtitle} */}
            ${item?.price}
          </div>

          {/* PRODUCT QUANTITY */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            <button className="bg-black text-white">
              <TiMinus />
            </button>
            <span className="px-2">{item?.quantity}</span>
            <button className="bg-black text-white ">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
