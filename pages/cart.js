import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const Cart = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className='flex flex-col lg:flex-row gap-12 py-10'>
            
            {/* cart items */}
            <div className='flex-[2]'>
                <div className='text-lg font-bold'>
                    Your Cart
                </div>
                <div className='hidden md:flex justify-between items-center text-md font-medium text-black/[0.5]'>
                    <p ></p>
                    <p >Name</p>
                    <p>Price</p>
                    <p>Quantity</p>
                </div>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            {/* cart items closed */}


                            {/* SUMMARY START */}
                            <div className="flex-[1] shadow-md rounded-md">
                                <div className="text-lg font-bold mt-5 pl-5 mb-2">Your total</div>

                                <div className="px-5 bg-white  rounded-xl">
                                   
                                    <div className="text-sm md:text-md  flex justify-between items-center">
                                        <span className='font-bold'>Products X3</span>
                                        <span>$60</span>
                                    </div>
                                    <div className='h-[250px]'>

                                    </div>
                                    <div className="text-sm md:text-md  flex justify-between items-center mb-4">
                                        <span className='font-bold'>Total Price</span>
                                        <span>$60</span>
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
        </Wrapper>
    </div>
  )
}

export default Cart