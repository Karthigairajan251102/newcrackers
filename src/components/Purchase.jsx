import React from 'react'
import product from '../Products.json'
import '../styles/Purchase.css'
import { Button,Container,Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/CrackerSlice";
import Navs from './Navs'
import { useNavigate } from 'react-router-dom';
import cartIcon from '../assets/images/cart.jpg'


function Purchase() {


    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const items = useSelector((state) => state.visibility.items);
    
    
    const goCart = () =>{
        navigate("/cart")
    }

  return (
    <>

    <Navs/>
    <Container className='mt-5'>
        <h1 className='prodTitle'>Products</h1>
        <Row>
            {Object.keys(items).map((itemKey)=>(
                <Col key={itemKey} lg='4' md='4' sm='12' xs='12' className='mt-5'>
                    <Container className='prodImageContainer'>
                    <Image src={items[itemKey].image} className='prodImage'></Image>
                    </Container>
                    <h3 className='prodDetails'>{items[itemKey].name}</h3>
                    <h6 className='prodDetails'>Price: Rs.{items[itemKey].price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => {dispatch(addCart(items[itemKey])) ; goCart() }} >Add to cart</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>
    </>
  )
}

export default Purchase