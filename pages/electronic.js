import ProductCard from '@/components/ProductCard'
import React from 'react'

const electronic = ({products}) => {
  return (
    <div className="container md:px-4 pt-4">
      

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
  )
}

export default electronic;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
      props: { products: data },
  };
}