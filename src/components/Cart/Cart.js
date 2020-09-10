import React from 'react';


const Cart = (props) => {
    const cart =props.cart;
    let total =0;
    
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity ;
        console.log(product.quantity);
    }

    let shipping =0;
    if(total > 40){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 10.99;
    }

    let taxAndvat = (total/5).toFixed(2)
    return (
        <div>
            <h3>Itms :{cart.length}</h3>
            <h4>Prodauct Price :{total.toFixed(2)}</h4>
            <p>Shipping Cost: {shipping.toFixed(2)}</p>
            <p>Vat + Tax : {taxAndvat}</p>
            <p><b>Total Price : {total + shipping + Number(taxAndvat)  }</b></p>
         
          {
              props.children
          }
        </div>
    );
};

export default Cart;