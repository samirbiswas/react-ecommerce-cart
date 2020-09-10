import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const firstTenData = fakeData.slice(0,10);
    const [products, setProducts] = useState(firstTenData);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{

        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(exKey =>{
            const product = fakeData.find(pd=> pd.key === exKey);
            product.quantity = savedCart[exKey];
            return product;
        })
        setCart(previousCart);
    },[])


    const addHandelProduct= (product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd=> pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=> pd.key !== toBeAddedKey);
             newCart = [...others,sameProduct];
        }else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDatabaseCart(toBeAddedKey, count);
    }

    //console.log(fakeData);
    return (
        <div className="shop-products">
            <div className="product-container">
               
                    {
                        products.map(pd=> <Products 
                            key ={pd.key}
                            addShowBtn ={true}
                            addHandelProduct = {addHandelProduct}
                            product={pd}></Products>)
                    }
                
            </div>
            
            <div className="cart">
                <Cart cart={cart}>
                <Link to="/review">
                    <button className="cart-button" >Review Order</button>
                        </Link>
                </Cart>
            </div>
            </div>
           
    );
};

export default Shop;