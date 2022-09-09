import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
 import { calculateTotal} from "./features/cart/cartSlice";
 import { getCartItems } from "./features/cart/cartSlice";
 import { useEffect } from "react";
import cartItems from "./cart-items";
import Modal from "./components/Modal";
// redux stuff

function App() {
  const {cartItems,isLoading} = useSelector((store)=>store.cart)
  const {isOpen} = useSelector((store)=>store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])


  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  if(isLoading){
   return (
    <div className="loading">
         <h3>Loading....</h3>
    </div>
   )
  }

  return (
    <main>
      {isOpen &&
       <Modal/>
      }
      
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
