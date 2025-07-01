import { XIcon } from "lucide-react";
import { useContext, useState} from "react";
import { CartContext } from "../context/cart";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Carbon from "../../public/assets/images/icon-carbon-neutral.svg";
import Empty from "../component/empty";
import Confirm from "../component/confirm";


export default function Cart() {
    const { cartItems, removeFromCart, clearCart,cartTotal, addToCart,removeCart } = useContext(CartContext);
    const [showConfirm, setShowConfirm] = useState(false);



    return (
        <div className="bg-white p-4 rounded-xl shadow-lg overflow-y-scroll">
                <div className="mb-4 flex justify-between items-center">
                <h1 className="text-lg font-bold text-[#c73a0f]">
                    Your Cart ({cartItems.length})
                </h1>
                {cartItems.length > 0 && (
                    <button
                        onClick={clearCart}
                        className="text-sm text-red-500 hover:underline"
                    >
                        Clear Cart
                    </button>
                )}
            </div>

            {cartItems.length === 0 ? (
                <Empty/>
            ) : (
                <div>
                    {cartItems.map((product, index) => (
                        <div key={index} className="mb-4 flex justify-between gap-2 bg-gray-100 p-2 rounded-lg">
                           <div>
                           <img
                                src={product.image.thumbnail}
                                alt={product.name}
                                width={60}
                                height={60}
                                className="rounded"
                            />
                            <div className="flex-1">
                             <div> 
                                  <p className="font-medium">{product.name}</p>
                                <ul className="flex gap-2 items-center"> 
                                    <li><Button className="bg-red-100 text-black hover:bg-red-950 hover:text-white" onClick={()=> addToCart(product)}>+</Button></li>
                                    <p>{product.quantity}</p>
                                    <li><Button className="bg-red-100 text-black hover:bg-red-950 hover:text-white" onClick={()=> removeFromCart(product.name)}>-</Button></li>
                                </ul>
                                <p className="text-sm text-gray-600">
                                    ${product.price.toFixed(2)} x {product.quantity}
                                </p>
                               
                                </div>
                           </div>
                           </div>
                               <div className="rounded-full bg-red-100 p-2 w-10 h-9 hover:bg-red-950 hover:text-white flex items-center justify-center">
                               <XIcon onClick={() => removeCart(product.name)} size={18} className="cursor-pointer" />
                               </div>
                               
                            
                         
                        </div>
                        
                    ))}
                     <p>order total:{cartTotal}</p>
                     <div className="space-y-4">
                        <div className="bg-red-100 p-2 flex gap-2 items-center justify-center py-4 rounded-lg">
                           <span> <Image src={Carbon} alt="carbon image" width={20}/></span>
                            <p>this is a carbon neutral delivery</p>
                        </div>
                        <div
                         onClick={() => setShowConfirm(true)}
                         className="bg-[#c73a0f] py-2 text-center mx-2 rounded-full text-white hover:bg-red-950  ">
                            confirm order
                        </div>
                     </div>
                </div>
                
            )}
          
              <Confirm isOpen={showConfirm} onClose={() => setShowConfirm(false)} />
        </div>
    );
}





