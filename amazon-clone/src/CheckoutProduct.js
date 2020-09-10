import React from 'react';
import './CheckoutProduct.css';

function checkoutProduct({id, title, image, rating, price}) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>$ {price}</p>
                <p className='checkoutProduct__rating'>

                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p> 
                    ))}

                </p>
                
                <button>Remove from Basket</button>

            </div>
        </div>
    )
}

export default checkoutProduct
