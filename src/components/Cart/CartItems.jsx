import React from 'react'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';

const CartItems = ({cartOpen , toggleCart}) => {

 

  return (
    <div className={`fixed top-0 right-0 md:w-[300px] w-60 h-screen flex flex-col z-50 text-black bg-white shadow-lg transition-transform duration-300 ${cartOpen ? 'translate-x-0 border-2 border-l border-gray-700' : 'translate-x-full'}`}>
        {/* {close button}  */}
        <div className='flex justify-start mt-10 p-4'>
            <button onClick={toggleCart}>
                <IoMdClose className=' text-gray-600 h-8 w-8 cursor-pointer' />
            </button>
        </div>
        <div className='flex-grow  h-full overflow-y-auto ml-5 mt-10'>
            <CartContent/>
        </div>
        <div>
        </div>

    </div>
  )
}

export default CartItems