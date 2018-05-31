import React from 'react';
import {getColor} from './dict/color';

const Detail = ({product, updateCart, setSelectedItem}) => {
    // destructuring product property into var for easier access
    let {title, description, color, image, stock, price} = product;

    return (
        <div className="detail">
            <span className="detail__close far fa-times-circle" onClick={ () => setSelectedItem(null) }></span>
            <div className="detail__container">
                <div className="detail__itemImgWrap">
                    <img className="detail__itemImage" style={{border: `solid 3px ${getColor(color)}`}} src={ image } alt={ title } />
                </div>
                <div className="detail__itemInfoWrap">
                    <h2 className="detail__itemTitle">{title}</h2>
                    <p className="detail__itemDesc">{ description }</p>
                    <ul className="detail__itemInfo">
                        <li><span>Price: </span>{price}</li>
                        <li><span>In-stock: </span>{stock.remaining}</li>
                        <li><span>Color: </span>{color}</li>
                    </ul>
                    <button  className="detail__itemButton" type="button" onClick={ () => updateCart(product._id, 1) } disabled={ stock.remaining <= 0 } >ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;