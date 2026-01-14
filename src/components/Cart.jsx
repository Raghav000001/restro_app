import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity } from '../redux/slices/cartSlice'


const Cart = () => {

         const dispatch = useDispatch()
 

         const cartItems = useSelector((store)=> store.cart.items)
         console.log(cartItems);

         const totalPrice = cartItems.reduce((acc,curr)=> acc+(curr.price*curr.qty),0)
         console.log(totalPrice);
         
         
       if (cartItems.length === 0) {
         return (
             <div>
                 <h1>your cart is empty right now</h1>
             </div>
         )
       }


       return (
           <div>
               { 
                 cartItems && cartItems.map((i)=> (
                      <div>
                          <p className='border'> {i.name} : <span>  ${i.price*i.qty} </span> 
                            <span>
                                <button> - </button> {i.qty} <button  onClick={()=> dispatch(increaseQuantity(i.id))} > + </button>
                            </span>
                          </p>
                      </div>
                 ))

               }

               <h2> 
                  amount to be paid : {totalPrice}
               </h2>
           </div>
       )


}

export default Cart
