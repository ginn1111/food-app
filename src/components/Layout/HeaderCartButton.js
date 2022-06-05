import React from 'react';
import clsx from 'clsx';

import styles from './HeaderCartButton.module.scss';
import CartIcon from '@/components/Cart/CartIcon';
import { useCart } from '@/hooks';

const HeaderCartButton = (props) => {
    const [btnIsHighlight, setBtnIsHighlight] = React.useState(false);

    const { items } = useCart();
    const numOfMeals = items.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    const btnStyle = clsx(styles.button, {
        [styles.bump]: btnIsHighlight,
    });

    React.useEffect(() => {
        if (items.length === 0) return;
        setBtnIsHighlight(true);
        const timerId = setTimeout(() => {
            setBtnIsHighlight(false);
        }, 300);

        return () => clearTimeout(timerId);
    }, [items]);

    return (
        <button className={btnStyle} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numOfMeals}</span>
        </button>
    );
};

export default HeaderCartButton;
