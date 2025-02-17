import React from 'react'
import { Provider } from "react-redux";
import Store from '../redux/Store'
import Purchase from './Purchase';
function Purse() {
  return (
    <>
    <Provider store={Store}>    
        <Purchase/>
    </Provider>
    </>
  )
}

export default Purse