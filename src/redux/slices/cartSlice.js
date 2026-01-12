import { createSlice } from "@reduxjs/toolkit";


 const cartSlice = createSlice({
        name:"cart",
        initialState:{
            items:["pizza","burger"]
        },
        reducers:{
            addToCart:()=> {

            },
            removeFromCart:()=> {

            },
            clearCart:()=> {

            }
        }
  })


  export const {addToCart,removeFromCart,clearCart} = cartSlice.actions
  export default cartSlice.reducer