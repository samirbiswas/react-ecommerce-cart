import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ItemReview from '../ItemReview/ItemReview';
import Cart from '../Cart/Cart';
import './Review.css'
import happyImage from '../../images/giphy.gif'
const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);

     const handlePlaceOrder = ()=>{
         console.log("hello");
         setCart([]);
         setOrderPlace(true);
         processOrder();
     }

    const removeProduct = (productKey)=>{
        //console.log("remove clicked",productKey);
        const newCart = cart.filter(pd=> pd.key !==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        //console.log(saveCart);
        const productKey = Object.keys(saveCart);
        const count = productKey.map(key=> {
            const products = fakeData.find( pd=> pd.key === key);
            products.quantity = saveCart[key];
            return products;
        
        });

        //console.log(count);
        setCart(count);
    },[])
       let thankyou;
       if(orderPlace){
        thankyou = <img src={happyImage} alt=""/>
       }
    return (
        <div className="review-products">
             <div className ="review-container">
              {
               cart.map(pd=> <ItemReview 
                removeProduct ={removeProduct}
                product={pd}></ItemReview> )     
                }
                {thankyou}
             </div>

             <div className="cart-container">
                 <Cart  cart={cart}>
                     <button onClick={handlePlaceOrder} className="cart-button">Place Order</button>
                 </Cart>

             </div>
        </div>
        
    );
};

export default Review;