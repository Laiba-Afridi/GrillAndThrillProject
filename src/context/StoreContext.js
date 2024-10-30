import {createContext, useEffect, useState} from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {

    const [cartItem,setCartItem] = useState({});

    // const addToCart = (itemId) => {
    //     if(!cartItem[itemId]){
    //     setCartItem((prev)=>({...prev, [itemId]:1}))
    //     }
    //     else{
    //         setCartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    //     }
    // }
    const addToCart = (itemId) => {
        console.log(`Adding item with ID: ${itemId}`);
        setCartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, 
            // Increment or set to 1
        }));
    };

    // const removeCartItem = (itemId) =>{
    //     setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    // }
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

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeCartItem
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;