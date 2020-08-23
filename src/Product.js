import React from 'react'
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p className="star__icon"><StarIcon/></p>
                    ))
                }
            </div>
            <img src={image} alt="" />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
