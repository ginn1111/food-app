import React from 'react';
import CartContext from './cart-context';
import logger from '@/utils/logger';

const initCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const newItem = { ...action.item };
            const indexOfItem = state.items.findIndex(
                (item) => item.id === newItem.id,
            );
            let updateItems,
                updateTotalAmount = state.totalAmount;
            if (indexOfItem !== -1) {
                const oldItem = state.items[indexOfItem];
                const updateItem = {
                    ...oldItem,
                    amount: oldItem.amount + newItem.amount,
                };

                updateItems = [...state.items];
                updateItems[indexOfItem] = updateItem;
            } else {
                updateItems = state.items.concat(newItem);
            }
            updateTotalAmount += newItem.amount * newItem.price;
            return {
                items: updateItems,
                totalAmount: updateTotalAmount,
            };
        }
        case 'REMOVE': {
            let updateItems,
                updateTotalAmount = state.totalAmount;
            const indexOfItem = state.items.findIndex(
                (item) => item.id === action.id,
            );
            if (indexOfItem !== -1) {
                updateItems = [...state.items];
                const currItem = updateItems[indexOfItem];
                if (currItem.amount === 1) {
                    updateItems.splice(indexOfItem, 1);
                } else {
                    const updateItem = {
                        ...currItem,
                        amount: currItem.amount - 1,
                    };
                    updateItems[indexOfItem] = updateItem;
                }
                updateTotalAmount -= currItem.price;
            }
            return {
                items: updateItems,
                totalAmount: updateTotalAmount,
            };
        }
        default:
            throw new Error('Invalid action');
    }
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = React.useReducer(
        logger(cartReducer),
        initCartState,
    );

    function addItemHandler(item) {
        dispatchCartAction({ type: 'ADD', item });
    }

    function removeItemHandler(id) {
        dispatchCartAction({ type: 'REMOVE', id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
