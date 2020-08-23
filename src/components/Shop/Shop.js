import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstTenData = fakeData.slice(0,5);
    const [products, setProducts] = useState(firstTenData);
    const [cart, setCart] = useState([]);


    const addHandelProduct= (product)=>{
        console.log("product Added",product);
        const newcart = [...cart,product];
        setCart(newcart);
    }

    //console.log(fakeData);
    return (
        <div className="shop-products">
            <div className="product-container">
                {/* <h1>This is shop</h1>
                <h3>product:{products.length}</h3> */}
               
                    {
                        products.map(pd=> <Products 
                            addHandelProduct = {addHandelProduct}
                            product={pd}></Products>)
                    }
                
            </div>
            
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
            </div>

           
    );
};

export default Shop;