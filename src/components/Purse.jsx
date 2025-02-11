import React from 'react'
import { Provider } from "react-redux";
import store from "../redux/Store";
import Purchase from './Purchase';
function Purse() {
  return (
    <>
    <Provider store={store}>    
        <Purchase/>
    </Provider>
    </>
  )
}

export default Purse