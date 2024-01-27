// import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";

const ProductCard = ({key, data}) => {
  // console.log("line nu", data.image)
  return (
    <>
    <Link href={`/product/${data.id}`} className="no-underline" key={key}>
    <div className="transform overflow-hidden md:!w-[300px] bg-white sm:!w-[200px]  border-1 rounded-2xl  m-3 ">
      <Image
        src={data?.image}
        alt={data.name}
        width={235} 
        height={295}
        // alt="Picture of the author"
        className="p-2 flex rounded-2xl object-fill !min-w-[235px] !min-h-[200px]"
        // src="https://res.cloudinary.com/premiumwishes/images/w_800,h_550/f_auto,q_auto/v1656613097/625_262772dee6/625_262772dee6.jpg?_i=AA"
      />
      <div className="pt-4 pl-2 text-black">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <div className="flex items-center text-black">
          <p className="mr-1 text-sm ">{data.category}</p>
        </div>
      </div>
      <div className="pt-4 pl-2 text-black ">
            {data.description}
          </div>
          <div className="pt-4 pl-2 text-black">
            Price: <span className="font-bold">{data.price}</span>
          </div>
          <div className="pt-4 pl-2 bg-black text-white flex justify-center m-4 pb-4 rounded-[10px]">
           <button className="">Add to cart <BsCart className="inline text-[15px] text-white md:text-[20px]" /></button>
          </div>
    </div>
    </Link>
    </>
  );
};

export default ProductCard;
