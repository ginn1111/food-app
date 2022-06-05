import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import Cart from '../Cart/Cart';

const Meals = (props) => {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvailableMeals />
        </React.Fragment>
    );
};

export default Meals;
