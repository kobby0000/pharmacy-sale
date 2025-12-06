import {useState} from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';

const CartDrawer = ( {drawerOpen, toggleCartDrawer}) => {
  
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:2-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-o" : "translate-x-full"}`}>

        {/* close button */}
        <div className="flex justify-end p-4">
            <button onClick={toggleCartDrawer}>
                <IoMdClose className="h-6 w-6 text-gray-600 hover:text-gray-800"  />
            </button>
        </div>

        {/* Cart Conten with scrollable */}
        <div className="flex-grow p-4 overflow-y-auto">
            <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
            {/* component for content  */}
            <CartContents />
        </div>

            {/* checkout button  */}
            <div className="p-4 bg-white sticky btoom-0">
                <button className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>Checkout</button>
                <p className='text-[11px] tracking-tighter text-gray-500 mt-2 text-center font-light'>Shipping, taxes, and discount codes calculated at checkout.</p>
            </div>
        </div>

    // close button 

  )
}

export default CartDrawer