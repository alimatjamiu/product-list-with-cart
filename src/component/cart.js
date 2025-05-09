import { XIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import { Button } from "../components/ui/button";

export default function Cart() {
    const { cartItems, removeFromCart, clearCart,cartTotal, addToCart,removeCart } = useContext(CartContext);

  ;

    return (
        <div className="bg-white p-4 rounded-xl shadow-lg overflow-y-auto">
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
                <div className="flex justify-center items-center h-full">
                    <p className="text-gray-500">Your cart is empty</p>
                </div>
            ) : (
                <div>
                    {cartItems.map((product, index) => (
                        <div key={index} className="mb-4 flex items-center gap-4">
                            <img
                                src={product.image.thumbnail}
                                alt={product.name}
                                width={60}
                                height={60}
                                className="rounded"
                            />
                            <div className="flex-1">
                                <p className="font-medium">{product.name}</p>
                                <ul className="flex gap-2 items-center"> 
                                    <li><Button variant="secondary" onClick={()=> addToCart(product)}>+</Button></li>
                                    <p>{product.quantity}</p>
                                    <li><Button variant="secondary" onClick={()=> removeFromCart(product.name)}>-</Button></li>
                                </ul>
                                <p className="text-sm text-gray-600">
                                    ${product.price.toFixed(2)} x {product.quantity}
                                </p>
                            </div>
                            <XIcon onClick={() => removeCart(product.name)} size={18} className="cursor-pointer" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
































// import { XIcon } from "lucide-react";

// import { Button } from "./ui/button";
// import { cartContext as CartContext } from "../../context/cart";
// import { useContext } from "react";
// import { CardHeader, CardTitle } from "./ui/card";
// import Empty1 from './empty'
// import Image from "next/image";

// export default function Cart() {
//   const { cartItems, clearCart, cartTotal, clearACart } = useContext(CartContext);

//   return (
//     <div className="bg-white p-4 rounded-xl shadow-lg overflow-y-auto ">
//       <div className=" mb-4">
//         <h1 className="text-lg font-bold text-[#c73a0f]">Your Cart ({cartItems.length})</h1>
     
//       </div>

//       {cartItems.length === 0 ? (
//        <Empty1/>
//       ) : (
//         cartItems.map((item, index) => (
//           <div key={index} className="mb-4  ">
//             <CardHeader className="p-0">
//               <Image
//                 src={item.image.thumbnail}
//                 alt={item.name}
//                 width={60}
//                 height={60}
//                 className="rounded"
//               />
//             </CardHeader>
//             <div className="flex justify-between gap-4">
//             <div>
//             <p className="font-medium">{item.name}</p>
//               <p className="text-sm text-gray-600">
//                 ${item.price.toFixed(2)} x {item.quantity}
//               </p>
//             </div>

//              <XIcon onClick={clearACart()} size={18} />
//             </div>
           
//           </div>
//         ))
//       )}
//        {cartItems.length > 0 && (
//  <div className="space-y-4">
// <div className="flex justify-between">
// <CardTitle>  order total </CardTitle>
// <CardTitle>${cartTotal().toFixed(2)}</CardTitle>
// </div>
//   <Button onClick={clearCart} variant="secondary" className="flex gap-2 items-center">
//     <XIcon size={18} />
//     Clear Cart
//   </Button>
//  </div>

// )}

//     </div>
//   );
// }