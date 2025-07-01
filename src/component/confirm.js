
"use client"
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context/cart";


export default function Confirm({ isOpen, onClose }) {
    const { cartItems, cartTotal, clearCart } = useContext(CartContext);

    const handleStartNewOrder = () => {
  clearCart();
  onClose();
};
    if (!isOpen || cartItems.length === 0) return cartItems.length >= 1 ? [] : cartItems;
  
    
    return(
        <div className="fixed inset-0 z-[999]  flex items-center justify-center  bg-transparent backdrop-blur overflow-scroll ">
<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h1 className=" font-bold mb-4 text-xl">Order Confirmed</h1>
            <p className="text-sm mb-4">we hope you enjoy your food</p>
               <div className="bg-red-100 p-6 ">
           {cartItems.map((product) => (
            <div key={product.name} className="mb-4   p-2 rounded-lg  ">
                <div className="flex items-center gap-2">
                <Image
                        src={product.image.thumbnail}
                        alt={product.name}
                        width={30}
                        height={30}
                        className="rounded"
                    />
                    <div className="flex-1">
                    <div> 
                            <p className="text-sm">{product.name}</p>
                         
                            <span className="flex justify-between text-sm text-gray-600">
                               <p> ${product.price.toFixed(2)} x {product.quantity}</p> 
                                 <p className="font-bold"> ${(product.price * product.quantity).toFixed(2)}</p> 
                            </span>
                          
                            </div>
                             
                            
                    </div>
                   
                </div>
                 

            </div>
           )

           )}
            <div className="mt-4 border-t pt-4">
                <p className="text-lg font-bold">Total: ${cartTotal.toFixed(2)}</p></div>
        
            
           </div>
            <div className="mt-4 flex justify-center">
                <button
                    onClick={handleStartNewOrder}
                    className="bg-[#c73a0f]  text-white px-12 rounded-md py-2  hover:bg-red-600"
                >
                    start new order
                </button>
            </div>
</div>





        </div>
    )
}