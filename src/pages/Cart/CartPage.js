import react from 'react';
import './CartPage.css';
import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';



const Cart = () =>
{
    const navigate = useNavigate(); 
    const { cartItem={}, food_list=[], removeCartItem, getTotalCartAmount } = useContext(StoreContext);

    return(
        <div className='cart'>
            <div className='cart-items'>
               <div className='cart-items-title'>

                       <p>Items</p>
                       <p>Title</p>
                       <p>Price</p>
                       <p>Quantity</p>
                       <p>Total</p>
                       <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{
                if(cartItem[item.id] >0)
                {
                    return (
                        <div>
                        <div className='cart-items-title cart-items-item'>
                            <img src={item.image} alt=" " />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{cartItem[item.id]}</p>
                            <p>Rs{item.price*cartItem[item.id]}</p>
                            <p onClick={()=>removeCartItem(item.id)} className='cross'>x</p>
                            </div>
                            <hr />
                           </div>
                    );
                }
                return null;
            })}
            </div>
<div className="cart-bottom">
    <div className="cart-total">
        <h2>
            Cart Totals
        </h2>
        <div>
        <div className="cart-total-details">
                   <p>Subtotal</p>
                   <p>{getTotalCartAmount()}</p>
        </div>
        <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>Rs {getTotalCartAmount()===0?0:200}</p>
        </div>
        <hr />
        <div className="cart-total-details">
        <b>Total</b>
        <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount()+200}</b>
        </div>
        </div>
        <button onClick={()=>navigate('/Placeorder')}>PROCEED TO CHECKOUT</button>
    </div>
  <div className="cart-promocode">
  <div>
    <p>If you have a promo code, Enter it here</p>
    <div className="cart-promocode-input">
<input type="text"  name=" " placeholder='promo code' />
<button>Submit</button>
    </div>
  </div>
  </div>

    </div>            
            </div>
    );
}
// export default CartPage;
export default Cart;
