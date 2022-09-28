import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Meal.css';

const Meal = () => {
    const [products, setProducts]= useState([]);
    console.log(products);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then(res=>res.json())
        .then(data => setProducts(data.meals))

    },[])

    return (
        <div className='meal-container'>
            <div className='food-container'>
                            
                {
                products?.map(product =><Product key={product.idMeal}
                product={product}></Product>)
                }
            </div>
            <div>
                <h3>This is Order list</h3>
                </div>
        </div>
    );
};

export default Meal;