import React from 'react';
import './Product.css';
import cart from '../images/Cart.svg'
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:ital@1&family=Lato&family=Montserrat:ital,wght@1,300&display=swap');
</style>
const Product = (props) => {
    const {category,id,img,quantity,price,ratings,seller,name}= props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
       
        <div className='product'>
          <img src={img} alt="" />
          <div>
            <h6 className='product-name'>{name}</h6>
         <p>Price: ${price}</p>
         <p>Manufacturer : {seller}</p>
         <p>Rating : {ratings}</p>
          </div>
          <button onClick={() =>handleAddToCart(props.product)} className='product-btn'>Add to cart{cart}
          </button>
        </div>
        
        
        
    );
};

export default Product;