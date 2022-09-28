import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    // let name;
    let total = 0;
    let shippingCharge = 0;
    for (const product of cart) {
        // name = product.name;
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shippingCharge + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            {/* <h4>Selected Product Name: 
                <ol>
                    <li>{name}</li>
                </ol>
                </h4> */}
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;