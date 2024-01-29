import ProductCard from "@/components/ProductCard";
import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jewelry = ({ products }) => {
  return (
    <div className="container mx-auto md:px-4 pt-4">
      <ToastContainer />
      {/* product listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 md:px-5">
        {products?.map((product) => (
          <ProductCard key={product?.id} data={product} />
        ))}
        {/* <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />  */}
      </div>
    </div>
  );
};

export default jewelry;

export async function getStaticProps() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const data = await res.json();

  return {
    props: { products: data },
  };
}
