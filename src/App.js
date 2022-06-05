import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from '@/components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
    const [cartIsShow, setCartIsShow] = React.useState(false);

    function setShowCartHandler() {
        setCartIsShow(true);
    }

    function setCloseCartHandler() {
        setCartIsShow(false);
    }

    return (
        <CartProvider>
            {cartIsShow && <Cart onClose={setCloseCartHandler} />}
            <Header onShowCart={setShowCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
