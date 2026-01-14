import { createSlice } from "@reduxjs/toolkit";


 const cartSlice = createSlice({
        name:"cart",
        initialState:{
            items:[]
        },
        reducers:{
            addToCart:(state,action)=> {
               const item = action.payload
               const id = action.payload
               const existingItem = state.items.find((i)=>i.id===id)
               if (existingItem) {
                  existingItem.qty+=1
               }
               state.items.push({...item,qty:1})
            },
            removeFromCart:(state,action)=> {
                const id = action.payload
                state.items.filter((i)=> i.id !== id)
            },
            clearCart:(state)=> {  
              state.items.length = 0
            },
            increaseQuantity:(state,action)=> {
                const id = action.payload
                const item = state.items.find((i)=>i.id===id)
                if (item) {
                    item.qty+=1
                }
            },
            decreaseQuantity:(state,action)=> {
                   
            }
        }
  })


  export const {addToCart,removeFromCart,clearCart,increaseQuantity} = cartSlice.actions
  export default cartSlice.reducer