import React from 'react'
import product from '../Products.json'
import '../styles/Purchase.css'
import { Button,Container,Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/CrackerSlice";
import Navs from './Navs'
function Purchase() {
    const dispatch = useDispatch();
    const { quantity, price } = useSelector((state) => state.visibility);
  return (
    <>

    <Navs/>
    {/* FLOWER POTS */}

    <Container>
        <h1 className='prodTitle'>Flower Pots</h1>
        <Row>
            {product.pots.map((prods,index)=>(
                <Col key={index} lg='4' md='4' sm='12' xs='12'>
                    <Container className='prodImageContainer'>
                        <Image src={prods.image} className='prodImage'/>
                    </Container>
                    <h4 className='prodDetails'>{prods.name}</h4>
                    <h6 className='prodDetails'>Quantity : {quantity}</h6>
                    <h6 className='prodDetails'>Total Amount: {price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => dispatch(decrement())}>-</Button>
                        <Button className='prodBtn'>Order</Button>
                        <Button className='prodBtn' onClick={() => dispatch(increment())}>+</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>

    
    {/* CHAKKARS */}

    <Container className='mt-5'>
        <h1 className='prodTitle'>Chakkars</h1>
        <Row>
            {product.chakkar.map((prods,index)=>(
                <Col key={index} lg='4' md='4' sm='12' xs='12'>
                    <Container className='prodImageContainer'>
                        <Image src={prods.image} className='prodImage'/>
                    </Container>
                    <h4 className='prodDetails'>{prods.name}</h4>
                    <h6 className='prodDetails'>Quantity : {quantity}</h6>
                    <h6 className='prodDetails'>Total Amount: {price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => dispatch(decrement())}>-</Button>
                        <Button className='prodBtn'>Order</Button>
                        <Button className='prodBtn' onClick={() => dispatch(increment())}>+</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>


    {/* TWINGLING STAR */}

    <Container className='mt-5'>
        <h1 className='prodTitle'>Twingling Star</h1>
        <Row>
            {product.star.map((prods,index)=>(
                <Col key={index} lg='4' md='4' sm='12' xs='12'>
                    <Container className='prodImageContainer'>
                        <Image src={prods.image} className='prodImage'/>
                    </Container>
                    <h4 className='prodDetails'>{prods.name}</h4>
                    <h6 className='prodDetails'>Quantity : {quantity}</h6>
                    <h6 className='prodDetails'>Total Amount: {price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => dispatch(decrement())}>-</Button>
                        <Button className='prodBtn'>Order</Button>
                        <Button className='prodBtn' onClick={() => dispatch(increment())}>+</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>


    {/* ROCKETS */}

    <Container className='mt-5'>
        <h1 className='prodTitle'>Rockets</h1>
        <Row>
            {product.rocket.map((prods,index)=>(
                <Col key={index} lg='4' md='4' sm='12' xs='12'>
                    <Container className='prodImageContainer'>
                        <Image src={prods.image} className='prodImage'/>
                    </Container>
                    <h4 className='prodDetails'>{prods.name}</h4>
                    <h6 className='prodDetails'>Quantity : {quantity}</h6>
                    <h6 className='prodDetails'>Total Amount: {price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => dispatch(decrement())}>-</Button>
                        <Button className='prodBtn'>Order</Button>
                        <Button className='prodBtn' onClick={() => dispatch(increment())}>+</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>

    {/* SPARKLERS */}

    <Container className='mt-5'>
        <h1 className='prodTitle'>Sparklers</h1>
        <Row>
            {product.spark.map((prods,index)=>(
                <Col key={index} lg='4' md='4' sm='12' xs='12'>
                    <Container className='prodImageContainer'>
                        <Image src={prods.image} className='prodImage'/>
                    </Container>
                    <h4 className='prodDetails'>{prods.name}</h4>
                    <h6 className='prodDetails'>Quantity : {quantity}</h6>
                    <h6 className='prodDetails'>Total Amount: {price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => dispatch(decrement())}>-</Button>
                        <Button className='prodBtn'>Order</Button>
                        <Button className='prodBtn' onClick={() => dispatch(increment())}>+</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>


    {/* ONE SOUNDS */}

    <Container className='mt-5'>
        <h1 className='prodTitle'>One Sound Crackers</h1>
        <Row>
            {product.bomb.map((prods,index)=>(
                <Col key={index} lg='4' md='4' sm='12' xs='12'>
                    <Container className='prodImageContainer'>
                        <Image src={prods.image} className='prodImage'/>
                    </Container>
                    <h4 className='prodDetails'>{prods.name}</h4>
                    <h6 className='prodDetails'>Quantity : {quantity}</h6>
                    <h6 className='prodDetails'>Total Amount: {price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => dispatch(decrement())}>-</Button>
                        <Button className='prodBtn'>Order</Button>
                        <Button className='prodBtn' onClick={() => dispatch(increment())}>+</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>


    {/* FOUNTAINS */}

    <Container className='mt-5'>
        <h1 className='prodTitle'>Fountains</h1>
        <Row>
            {product.fount.map((prods,index)=>(
                <Col key={index} lg='4' md='4' sm='12' xs='12'>
                    <Container className='prodImageContainer'>
                        <Image src={prods.image} className='prodImage'/>
                    </Container>
                    <h4 className='prodDetails'>{prods.name}</h4>
                    <h6 className='prodDetails'>Quantity : {quantity}</h6>
                    <h6 className='prodDetails'>Total Amount: {price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => dispatch(decrement())}>-</Button>
                        <Button className='prodBtn'>Order</Button>
                        <Button className='prodBtn' onClick={() => dispatch(increment())}>+</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>


    {/* SKY SHOTS */}

    <Container className='mt-5'>
        <h1 className='prodTitle'>Sky Shots</h1>
        <Row>
            {product.fancy.map((prods,index)=>(
                <Col key={index} lg='4' md='4' sm='12' xs='12'>
                    <Container className='prodImageContainer'>
                        <Image src={prods.image} className='prodImage'/>
                    </Container>
                    <h4 className='prodDetails'>{prods.name}</h4>
                    <h6 className='prodDetails'>Quantity : {quantity}</h6>
                    <h6 className='prodDetails'>Total Amount: {price}</h6>
                    <Container className='prodBtnContainer'>
                        <Button className='prodBtn' onClick={() => dispatch(decrement())}>-</Button>
                        <Button className='prodBtn'>Order</Button>
                        <Button className='prodBtn' onClick={() => dispatch(increment())}>+</Button>
                    </Container>
                </Col>
            ))}
        </Row>
    </Container>
    </>
  )
}

export default Purchase