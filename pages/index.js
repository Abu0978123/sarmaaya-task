import ProductCard from "@/components/ProductCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = ({ products }) => {


  
  return (
    <div className="container mx-auto md:px-4 pt-4">
      {/* product listing */}
      <ToastContainer />
      <div className="grid grid-cols-1 mx-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-5 md:px-5">
        {products?.map((product) => (
          <ProductCard key={product?.id} data={product} />
        ))}
        {/* <ProductCard /> */}
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

export default Index;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products/category/electronics");
  const data = await res.json();

  return {
    props: { products: data },
  };
}
