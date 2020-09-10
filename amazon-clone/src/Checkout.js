import React from 'react';
import "./Checkout.css";
import "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__top">
                <img className="checkout__add" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/SWP/discover/swp-storefront-desktopheader_1._CB1198675309_.jpg" alt="cards"/>
            </div>
            <div className="left__right">
                <div className="checkout__title">
                    <h1>Your Shopping Items: </h1>
                </div>
                <div className="checkout__left"></div>
                
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
