import React from 'react';
import Subtotal from './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    <CurrencyFormat
        
    renderText={(value) => (
        <>
            <p>
                Subtotal (0 Items): <strong>{
                    ` ${value} `
                }</strong>
            </p>
            <small className="Subtotal__gift">
                <input type="checkbox" /> This order contains
                a gift
            </small>
        </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"￡"}
    />
}


export default Subtotal;
