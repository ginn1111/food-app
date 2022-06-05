import React from 'react';
import styles from './MealItemForm.module.scss';
import Input from '@/components/UI/Input/Input';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = React.useState(true);
    const inputRef = React.useRef();

    function submitFormHandler(event) {
        event.preventDefault();
        const totalAmount = +inputRef.current.value;

        if (Number.isNaN(totalAmount) || totalAmount < 1 || totalAmount > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(totalAmount);
        setAmountIsValid(true);
    }

    return (
        <form onSubmit={submitFormHandler} className={styles.form}>
            <Input
                ref={inputRef}
                label={'Amount'}
                input={{
                    id: `amount__${props.id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please entered a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;
