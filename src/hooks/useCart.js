import React from 'react';
import CartContext from '@/store/cart-context';

export const useCart = () => {
    const cartContext = React.useContext(CartContext);
    return cartContext;
};
