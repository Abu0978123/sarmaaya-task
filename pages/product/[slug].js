import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ productsData, productData }) => {
  const dispatch = useDispatch();
  // const p = productData?.id;

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

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <div className="container mx-auto pb-4">
        <Link
          href={"/"}
          className="md:ml-[170px] no-underline font-bold text-black"
        >
          Back
        </Link>
      </div>
      <Wrapper>
        <div className="flex flex-col lg:flex-row  md:px-10 gap-[20px] lg:gap-[100px] ">
          {/* left column start */}

          <div className="w-full flex md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0  justify-center items-center">
            {/* <ProductDetailsCarousel images={p.image.data} /> */}
            <Image
              src={productsData?.image}
              width={300}
              height={300}
              alt={productsData?.title}
              className="rounded-[10px] !object-contain"
            />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] p-3 ">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {/* {p.name} */}
              {/* {post.name} */}
              {productsData?.title}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold my-5">
              {/* {p.subtitle} */}
              <span className="font-medium text-black/[0.5]">
                Category:
              </span>{" "}
              <br></br>
              {productsData?.category}
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 font-medium text-black/[0.5]">
                {/* MRP : &#8377;{p.price} */}
                Description:
              </p>
            </div>

            <div className="text-md ">{productsData?.description}</div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="my-10">
              {/* HEADING START */}
              <div className="flex flex-col mb-2">
                <div className="text-md font-medium text-black/[0.5]">
                  Price
                </div>
                <div className="text-md montserrat-alternates-extrabold pt-2">
                  <h3> ${productsData?.price}</h3>
                </div>
              </div>
            </div>
            <button className="w-full py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            onClick={() => {
              (
                dispatch(addToCart(productsData))    
                  );
                  notify();
              }
            }

            >
              Buy Now
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  // Fetch post IDs at build time
  const posts = await fetch("https://fakestoreapi.com/products");
  const postsData = await posts.json();
  const paths = postsData.map((post) => ({
    params: { slug: post.id.toString() },
  }));

  return { paths, fallback: false }; // No fallback for simplicity
}

export async function getStaticProps(context) {
  const id = context.params.slug;
  // Fetch post data at build time for each path
  const products = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productsData = await products.json();

  const product = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productData = await product.json();
  return {
    props: { 
      productsData,
      productData
     },
  };
}
