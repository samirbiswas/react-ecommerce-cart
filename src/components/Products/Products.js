import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    //console.log(props);
    const {price,name,img,stock,seller} = props.product;
    return (
        <div className="product-info">
          <div>
                <img src={img} alt=""/>
          </div>
          <div className="product-description">
                <h3>{name}</h3>
                <p><small>By:{seller}</small></p>
                <p>In stoke : {stock}</p>
                <p><b>Price: ${price}</b></p>
                <button className="cart-button"
                onClick={() => props.addHandelProduct(props.product)} 
                > <FontAwesomeIcon icon={faShoppingCart} />Add to cart </button>
          </div>
        </div>
    );
};

export default Products;