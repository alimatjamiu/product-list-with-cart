"use client";
import Image from "next/image";
import Data from "../../data.json"
import Cart from "./cart";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useContext, useState, useEffect } from "react";
import {  CartContext } from "../context/cart";
import Confirm from "../component/confirm";




export default function Product(){
    const { addToCart } = useContext(CartContext); 
const [showConfirm, setShowConfirm] = useState(false);



  
    
    return(
<section className="flex flex-col lg:flex-row  justify-between bg-[#f4edeb]  overflow-y-auto relative z-10">

    <main  className="flex-1">
<div className="flex flex-col justify-center w-full p-4">
            <h1 className="text-start">Desserts</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 p-1 gap-4 ">
          {Data.map((product, index) => (
             <Card key={index} className=" relative  ">
   <CardHeader>
   <Image 
                src={product.image.desktop}
                alt={product.name}
                width={1050}
                height={1050}
                
                className="hidden lg:block md:hidden rounded-xl w-full "/>
                <Image 
                src={product.image.mobile}
                alt={product.name}
                width={300}
                height={200}
                
                className="block w-full lg:hidden md:hidden rounded-xl "/>
                <Image 
                src={product.image.tablet}
                alt={product.name}
                width={200}
                height={200}
                
                className="hidden lg:hidden md:block rounded-xl  "/>
   </CardHeader>
                <Button
                onClick={() => addToCart(product)}
                 className="bg-[#c73a0f] text-white absolute xl:top-36  lg:top-30 lg:left-6">Add to cart</Button>
                
           <CardContent>
           <CardTitle className="text-md">{product.name}</CardTitle>
            <CardDescription className="text-gray-600">{product.category}</CardDescription>
            <p className="text-md font-bold mt-2">${product.price}</p>
           </CardContent>
                
                
                </Card>
            ))}
          </div>

        </div>
</main>
        <aside className="w-full lg:w-[30%]  p-4">
            <Cart />
        </aside>
        {showConfirm && <Confirm setShowConfirm={setShowConfirm} />}
</section>
       
    )
}