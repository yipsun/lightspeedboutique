import React from 'react';

const Cart = ({cart, products, submitCart}) => {
    let receipt = Object.keys(cart).reduce( (r,v,i) => {
        r.total += cart[v] * parseFloat(products[v].price.replace(/[$,]/g, ""));
        r.quantity += cart[v];
        return r;
    }, {total : 0 , quantity: 0} );

    return (
        <div className="cart">
            <span className="cart__quantity"><i className="far fa-plus-square"/>{receipt.quantity}</span> 
            <span className="cart__total"><i className="fas fa-dollar-sign"/> {receipt.total.toFixed(2)}</span>
            <button className="cart__button" type="checkout" onClick={() => submitCart(receipt.quantity)}>
                <i className="fas fa-cart-arrow-down"/> CHECKOUT
            </button>
        </div>
    );
};

export default Cart;