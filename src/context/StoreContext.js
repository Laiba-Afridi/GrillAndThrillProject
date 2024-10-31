import {createContext, useEffect, useState} from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {

    const [cartItem,setCartItem] = useState({});


  
    const addToCart = (itemId) => {
        console.log(`Adding item with ID: ${itemId}`);
        setCartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, 
            // Increment or set to 1
        }));
    };


    const removeCartItem = (itemId) => {
        setCartItem((prev) => {
            if (prev[itemId] > 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 }; // Decrement if greater than 1
            } else {
                const newCart = { ...prev };
                delete newCart[itemId]; // Remove item from cart if quantity is 0
                return newCart;
            }
        });
    };

    const getTotalCartAmount = () =>{
        let totalAmount =0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0){
                let itemInfo=food_list.find((product)=>product.id === item) 
                totalAmount += itemInfo.price* cartItem[item];
            }
           
        }
        return totalAmount;
       }
    


    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeCartItem,
    getTotalCartAmount,
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;