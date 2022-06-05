import { formatNum } from '@/utils/formatNum';
import React from 'react';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import { useCart } from '@/hooks';

const MealItem = (props) => {
    const { addItem: onAddToCart } = useCart();
    function onAddItemToCartHandler(amount) {
        onAddToCart({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        });
    }
    const price = formatNum(2, props.price, '$');

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm
                    id={props.id}
                    value={props.amount}
                    onAddToCart={onAddItemToCartHandler}
                />
            </div>
        </li>
    );
};

export default MealItem;
