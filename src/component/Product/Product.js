import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product)
    return (
        <div className='product'>
            <h1>{product.idMeal}</h1>
            <h1>{product.strArea}</h1>
            <h1>{product.strCategory}</h1>

        </div>
    );
};

export default Product;