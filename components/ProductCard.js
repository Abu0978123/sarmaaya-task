// import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({data}) => {
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // console.log("line nu", data.image)
  return (
    <>
    
    <div className="transform overflow-hidden md:!w-[300px] bg-white sm:!w-[200px]  border p-1 rounded-2xl  my-3 ">
    <Link href={`/product/${data.id}`} className="no-underline" key={data.id}>
      <div className="">
      <Image
        src={data?.image}
        alt="data"
        width={235} 
        height={295}
        // alt="Picture of the author"
        className="!object-contain p-2 flex rounded-2xl mx-auto !min-w-[235px] !min-h-[100px]"
        // src="https://res.cloudinary.com/premiumwishes/images/w_800,h_550/f_auto,q_auto/v1656613097/625_262772dee6/625_262772dee6.jpg?_i=AA"
      />
      </div>
      </Link>
      <div className="pt-4 pl-2 text-black">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <div className="flex items-center text-black">
          <p className="mr-1 text-sm ">{data.category}</p>
        </div>
      </div>
      <div className="pt-4 pl-2 text-black text-xs"> 
      <p className="text-sm">Description: </p>
            {data.description}
          </div>
          <div className="pt-4 pl-2 text-black">
            Price: <span className="font-bold">${data.price}</span>
          </div>
          <div className="pt-4 pl-2 bg-black text-white flex justify-center m-4 pb-4 rounded-[10px]">
           <button className=""
          onClick={() => {
            (
              dispatch(addToCart(data))    
                );
                notify();
            }
          }
           >Add to cart <BsCart className="inline text-[15px] text-white md:text-[20px]" /></button>
          </div>
    </div>
   
    </>
  );
};

export default ProductCard;
