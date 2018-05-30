import React from 'react';
import {getColor} from './dict/color'

const Item = ({product, selectedItem, updateCart}) => {
    // STYLE TO BE DELETED
    const style = {
        display : "inline-block",
        width: "20%",
        minHeight: "200px",
        verticalAlign: "top",
        background : getColor(product.color)
    }

    return (
        <div style={style}>
            <img src={product.image} alt="ddd" onClick={ () => selectedItem(product._id)}/>
            {/* <h3>{product.title + product.stock.remaining}</h3> */}
            <p>{product.price}</p>
            <button type="button" onClick={ () => updateCart(product._id ,1) } disabled={ product.stock.remaining <= 0 } >ADD TO CART</button>
        </div>
    );
};

export default Item;