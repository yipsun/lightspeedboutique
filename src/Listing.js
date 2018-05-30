import React from 'react';
import {getColor} from './dict/color'

const Listing = ({products, selectedItem, updateCart}) => {
    let items = Object.keys(products).map( id => {
        let product = products[id];
        return (
            <div className="listing__item" key={id}>
                <img className="listing__itemImage" src={product.image} alt="ddd" onClick={ () => selectedItem(product._id)}/>
                <p className="listing__itemPrice" style={{color : getColor(product.color)}}>{product.price}</p>
                <button type="button" onClick={ () => updateCart(product._id ,1) } disabled={ product.stock.remaining <= 0 } >ADD TO CART</button>
            </div>
        );
    });
    return (
        <div className="listing">{items}</div>
    );
};

export default Listing;