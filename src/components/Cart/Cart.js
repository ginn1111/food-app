import React from 'react';
import styles from './Cart.module.scss';
import Modal from '@/components/UI/Modal/Modal';
import { formatNum } from '@/utils/formatNum';
import { useCart } from '@/hooks';
import CartItem from './CartItem';

const Cart = (props) => {
    const { items, totalAmount, addItem, removeItem } = useCart();
    const total = formatNum(2, totalAmount, '$');

    function addItemHandler(item) {
        addItem({ ...item, amount: 1 });
    }

    function removeItemHandler(id) {
        removeItem(id);
    }

    const haveItems = items.length > 0;

    const cartItemList = items.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
        />
    ));

    return (
        <Modal onCloseModal={props.onClose}>
            <ul className={styles.cartItems}>{cartItemList}</ul>
            <div className={styles.total}>
                <span>Total amount</span>
                <span>{total}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.buttonAtl} onClick={props.onClose}>
                    Close
                </button>
                {haveItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
