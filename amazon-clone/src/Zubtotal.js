import React from 'react';
import Subtotal from './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Zubtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {( value ) => (
                 <>
                    <p>
                        Subtotal ({basket.length} Items): 
                        <strong> { value } </strong>
                    </p>
                    <small className="Subtotal__gift">
                        <input type="checkbox" /> This order contains
                        a gift
                    </small>
                 </>
            )}
            decimalScale = {2} //$->.00
            value = { getBasketTotal(basket) } //HOMEWORK ADD THE SUM OF ITEMS TO BASKET
            displayType = { "text" }
            thousandSeparator = { true }
            prefix = { " $ " }
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}


export default Zubtotal;
