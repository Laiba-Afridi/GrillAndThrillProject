import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeCartItem } = useContext(StoreContext);
  
  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt="food item" />
        {
          !cartItem[id] ? (
            <img className='add' onClick={() => addToCart(id)} src={assets.addIcon} alt="add" />
          ) : (
            <div className='food-item-counter'>
              <img onClick={() => removeCartItem(id)} src={assets.removeIcon} alt="remove" />
              <p>{cartItem[id]}</p>  {/* Display the quantity for this specific item */}
              <img onClick={() => addToCart(id)} src={assets.addedIcon} alt="added" />
            </div>
          )
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p className='food-item-name'>{name}</p>
        </div>
        <p className='food-item-desp'>{description}</p>
        <p className='food-item-price'>{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
