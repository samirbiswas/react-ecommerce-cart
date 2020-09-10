

import React from 'react';
import './ItemReview.css'
const ItemReview = (props) => {
  const {img,name,quantity,key,price} = props.product;
    return (
        <div className="product-container">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>Quantity :{quantity}</p>
            <p>Price : {price}</p>
            <button
            onClick={()=> props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ItemReview;