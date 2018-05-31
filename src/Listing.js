import React from 'react';
import {getColor} from './dict/color'

const Listing = ({limit, products, selectedItem, updateCart}) => {
    let items = Object.keys(products).slice(0, limit).map( id => {
        let {image, title, stock, price, color} = products[id];
        return (
            <div className="listing__item" key={id}>
                <img className="listing__itemImage" src={image} alt={title} onClick={() => selectedItem(id)}/>
                <p className="listing__itemPrice" style={{color : getColor(color)}}>{price}</p>
                <button className="listing__itemButton" type="button" onClick={ () => updateCart(id) } disabled={stock.remaining <= 0} >ADD TO CART</button>
            </div>
        );
    });
    return (
        <div className="listing">{items}</div>
    );
};

export default Listing;