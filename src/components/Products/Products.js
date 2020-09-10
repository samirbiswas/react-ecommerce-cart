import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Products = (props) => {
    //console.log(props);
    const {price,name,img,stock,seller,key} = props.product;
    return (
        <div className="product-info">
          <div>
                <img src={img} alt=""/>
          </div>
             <div className="product-description">
               <h3><Link to={"product/"+key}>{name}</Link></h3>
                <p><small>By:{seller}</small></p>
                <p>In stoke : {stock}</p>
                <p><b>Price: ${price}</b></p>
                { props.addShowBtn === true && <button className="cart-button"
                onClick={() => props.addHandelProduct(props.product)} 
                > <FontAwesomeIcon icon={faShoppingCart} />Add to cart </button>}
          </div>
        </div>
    );
};

export default Products;