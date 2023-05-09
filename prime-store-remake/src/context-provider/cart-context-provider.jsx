import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productId, title, price, imageUrl) => {
        const existingItemIndex = cartItems.findIndex((item) => item.productId === productId);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            setCartItems(updatedCartItems);
        } else {
            const item = {
                productId: productId,
                title: title,
                price: price,
                imageUrl: imageUrl,
                quantity: 1
            };
            setCartItems([...cartItems, item]);
        }
    };

    const increaseQuantity = (productId) => {
        const existingItemIndex = cartItems.findIndex((item) => item.productId === productId);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            setCartItems(updatedCartItems);
        }
    };

    const decreaseQuantity = (productId) => {
        const existingItemIndex = cartItems.findIndex((item) => item.productId === productId);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity--;
            if (updatedCartItems[existingItemIndex].quantity === 0) {
                updatedCartItems.splice(existingItemIndex, 1);
            }
            setCartItems(updatedCartItems);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.productId !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cart = {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
