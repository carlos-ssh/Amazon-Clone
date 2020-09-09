import React from 'react'
import "./Product.css";

function Product({title, price, rating, }) {
    return (
        <div className = "product">
            <div className = "product__info">
                <p>Cracking the Coding Interview: 189 Programming Questions and Solutions</p>
                <p className="product__price"><small>$</small><strong>21.67</strong></p>
            </div>
            <div className="product__rating">
                <p>⭐️</p>
                <p>⭐️</p>
                <p>⭐️</p>
                <p>⭐️</p>
            </div>
            <img className="product__img" src="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg" alt="Book"
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product