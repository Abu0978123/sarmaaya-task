import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router'
const ProductDetails = () => {
//   const routerr = useRouter({router})
//  const router = routerr.query.slug;
  return (
    <div className="w-full md:py-20">
      {/* <ToastContainer /> */}
      <div className="container pb-4">
      <Link href={'/'} className="md:ml-[100px] no-underline font-bold text-black">Back</Link>
      </div>
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[20px] lg:gap-[100px]">
          {/* left column start */}
          
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            {/* <ProductDetailsCarousel images={p.image.data} /> */}
            <img src= "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
            width={477}
            height={477}
            className="rounded-[10px]"
            />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {/* {p.name} */}
              Products
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold my-5">
                {/* {p.subtitle} */}
                <span className="font-medium text-black/[0.5]">Category:</span> <br></br>
                electronics
            </div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 font-medium text-black/[0.5]">
                {/* MRP : &#8377;{p.price} */}
                Description: 
              </p>
            </div>

            <div className="text-md font-medium ">
              incl. of taxes
            </div>
            

            {/* PRODUCT SIZE RANGE START */}
            <div className="my-10">
              {/* HEADING START */}
              <div className="flex flex-col mb-2">
                <div className="text-md font-medium text-black/[0.5]">Price</div>
                <div className="text-md  font-semibold  cursor-pointer pt-2">
                  $45
                </div>
              </div>
              
            </div>
            <button
              className="w-full py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
   
            >
              Add to Cart
            </button>
           
          </div>
          </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

// export async function getStaticPaths({router}) {
//   const product = await fetch(
//       `https://fakestoreapi.com/products/${router.query.slug}`
//   );
//   console.log(`https://fakestoreapi.com/products/${router.query.slug}`)
//   const data = await product.json()

//   return {
//       props: {
//           product:data
//       },
//   };
// }
