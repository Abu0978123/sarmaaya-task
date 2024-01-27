import ProductCard from "@/components/ProductCard";

const Index = ({ products }) => {
  return (
    <div className="container md:px-4 pt-4">
      {/* product listing */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 md:px-5">
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
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
}
