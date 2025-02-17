import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Provider } from 'react-redux';
import store from '../redux/Store';
import CartView from './CartView';
import Navs from './Navs'
function Cart() {
  
  return (
    <>
     <Provider store={store}>
      <Navs/>
      <CartView/>
     </Provider>
    </>
  )
}

export default Cart