import React from 'react';
import Subtotal from './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Zubtotal() {
    return (
        <div className="subtotal">
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
            decimalScale={2} //$->.00
            value={0} //HOMEWORK ADD THE SUM OF ITEMS TO BASKET
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
        </div>
    );
}


export default Zubtotal;
