import React from 'react';
import "./Checkout.css";
import Subtotal from './Zubtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const[{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__top">
                <img className="checkout__add" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/SWP/discover/swp-storefront-desktopheader_1._CB1198675309_.jpg" alt="cards"/>
            </div>
            <div className="left__right">
                <div>
                    <h1 className="checkout__title">Your Shopping Items: </h1>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.img}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

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
