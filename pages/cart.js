import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce(
        (total, val) => total + val.price,
        0
    );
}, [cartItems]);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            {/* cart items */}
            <div className="flex-[2]">
              <div className="text-lg font-bold">Your Cart</div>
              <div className="hidden md:flex justify-between items-center text-md font-medium text-black/[0.5]">
                <p></p>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
              </div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* cart items closed */}

            {/* SUMMARY START */}
            <div className="flex-[1] shadow-md rounded-md">
              <div className="text-lg font-bold mt-5 pl-5 mb-2">Your total</div>

              <div className="px-5 bg-white  rounded-xl">
                <div className="text-sm md:text-md  flex justify-between items-center">
                  <span className="font-bold">Products X{cartItems.length}</span>
                  <span>${Math.round(subTotal)}</span>
                </div>
                <div className="h-[250px]"></div>
                <div className="text-sm md:text-md  flex justify-between items-center mb-4">
                  <span className="font-bold">Total Price</span>
                  <span>${Math.round(subTotal)}</span>
                </div>
              </div>

              {/* BUTTON START */}
              <button
                className="w-full py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                // onClick={handlePayment}
              >
                Checkout
                {/* {loading && <img src="/spinner.svg" />} */}
              </button>
              {/* BUTTON END */}
            </div>
            {/* SUMMARY END */}
          </div>
        )}
        :
        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <img
              src="https://www.delta-carbon-mesoporous.com/cart.png"
              width={300}
              height={300}
              alt="404"
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
