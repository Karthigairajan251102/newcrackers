import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/CartView.css'
import { Button, Container, Image, Table } from 'react-bootstrap'
import { clearCart, decreaseCart, getTotals, increaseCart, removeCart } from '../redux/CrackerSlice'
import Order from './Order'
function CartView() {


    const dispatch = useDispatch()
    const [showOrder, setShowOrder] = useState(false)
    const cart = useSelector((state) => state.visibility)

    useEffect(()=>{
        dispatch(getTotals())
    }, [cart])


  return (
    <>
    <h1 className='shoppingTitle'>Shopping Cart</h1>
    {cart.cartItems.length === 0 ? (
        <Container>
            <h5>Your Cart is Currently Empty</h5>
        </Container>
    ) : (
        <>
        <Container>
        <Table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th className='prodTotal'>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.cartItems.map((cartItem) => (<>
                    <tr key={cartItem.id}>
                        <td><Image src={cartItem.image} alt={cartItem.name} className='cartImage'/><br></br> {cartItem.name}<br></br>
                        <Button className='remove' onClick={() => dispatch(removeCart(cartItem))}>Remove</Button>
                        </td>
                        <td>{cartItem.price}</td>
                        <td>
                            <div className='QuantityContainer'>
                                <Button className='quanButton' onClick={()=>dispatch(decreaseCart(cartItem))} >-</Button>
                                <h6 className='Quantity'>{cartItem.cartQuantity}</h6>
                                <Button className='quanButton' onClick={()=>dispatch(increaseCart(cartItem))}>+</Button>
                            </div>
                        </td>
                        <td>
                            <h6 className='prodTotal'>{cartItem.price * cartItem.cartQuantity }</h6>
                        </td>
                        
                    </tr>
                    </> 
                ))}
            </tbody>
        </Table>

        <Container className='subTotalContainer' fluid>
            <Container className='clear-order'>
                <Button className='clear' onClick={() => dispatch(clearCart())}>Clear</Button>
                <Button className='clear' onClick={() => setShowOrder(true)}>Order Now</Button>
            </Container>
            <Container className='subContainer'>
                <h4 className='subtotal'>SubTotal:{cart.cartTotalAmount}</h4>
           </Container>
        </Container>
        </Container>
        </>
    )}

    {showOrder &&
    <Order
    title={<h6>Order</h6>}
    content={<h6>This is Content</h6>}
    close={setShowOrder}
    />}

    </>
  )
}

export default CartView