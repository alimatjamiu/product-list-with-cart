"use client";

import  { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    // Load cart items from localStorage on initial render
    // Save cart items to localStorage whenever cartItems changes
        useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

      useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    


    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };
    

    const removeCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.name !== id));
    };
    const removeFromCart = (id) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(cartItem => cartItem.name === id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    return prevItems.map(cartItem =>
                        cartItem.name === id
                            ? { ...cartItem, quantity: cartItem.quantity - 1,  }
                            : cartItem
                    );
                } else {
                    return prevItems.filter(cartItem => cartItem.name !== id);
                }
            }
            return prevItems;
        });
    };
    

   
    const clearCart = () => {
  setCartItems([]);
  setCartTotal(0);
  localStorage.removeItem("cart"); // optional, if you're persisting
};


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal, removeCart }}>
            {children}
        </CartContext.Provider>
    );
}

