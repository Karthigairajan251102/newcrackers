import React from 'react'
import { Button,Container,Image, Row, Col } from 'react-bootstrap';
import Navs from "../components/Navs"
import "../styles/Home.css"
import diwali from '../assets/images/diwali1.jpg'
import happy from '../assets/images/happy.jpg'
import sale from '../assets/images/sale.jpg'
import chakkar from '../assets/images/chakkar.jpg'
import fount from '../assets/images/fount.jpg'
import ones from '../assets/images/onesound.jpg'
import fancy from '../assets/images/fancy.jpg'
import Contact from '../components/Contact'
import pommai from '../assets/images/pommai.png'
import diwali11 from '../assets/images/diwali11.jpg'
import diamond from '../assets/images/diamond.png'
import { useNavigate } from 'react-router-dom';

function Home() {

  
  

  return (
    <>
    <Navs/>
    <Image src={diwali} className='img'></Image>


    {/* DETAILS */}
    <Container className='details'>
      <Row>
        <Col lg='4'>
        <Container className='happyDiv'>
          <Image src={happy} className='happyImage'/>
        </Container>
        </Col>
        <Col lg='8'>
        <h2 className='buy'>Buy Brandred Sivakasi Crackers at Newcrackers</h2>
        <h6 className='detailsCrack'>We have immense pleasure in welcoming you to visit our mega 
          fireworks showroom located in Sivakasi, where you can directly place your 
          valuable orders and fulfill all your cracker’s requirements at one stop.<br></br><br></br><br></br>

          We are in the cracker industry for the past several years. It's our pride in supplying our esteemed 
          customers with the best quality crackers at the lowest market prices.
          </h6>

          <Button type='submit' className='order'  >Order</Button>
        </Col>
      </Row>
    </Container>


    {/* SPECIAL PRODUCTS */}

    <Container className='specialProducts' fluid>
      <Row>
        <Col lg='4' md='4' sm='12' xs='12'>
        <h3 className='splTop'>Flower Pots</h3>
        <h6 >We offer Flower pots in different sizes. You can avail flower pots in the following sizes : small, special, big, 
          deluxe and super. Celebrations could not be complete without colorful flower pot crackers.</h6>
        

        <h3 className='splBottom'>Rockets</h3>
        <h6 className='splBottomAbout'>We offer Rockets in different sizes. You can avail Rockets in the following sizes : small, special, big, 
          deluxe and super. Celebrations could not be complete without colorful flower pot crackers.</h6>
        </Col>
        <Col lg='4' md='4' sm='12' xs='12'>
        <Image src={pommai} className='pommai'/>
        </Col>
        <Col lg='4' md='4' sm='12' xs='12'>
        <h3 className='splTop'>Sparklers</h3>
        <h6 >We offer Rockets in different sizes. You can avail Rockets in the following sizes : small, special, big, 
          deluxe and super. Celebrations could not be complete without colorful flower pot crackers.</h6>


        <h3 className='splBottom'>Twingling Star</h3>
        <h6 className='splBottomAbout'>We offer Rockets in different sizes. You can avail Rockets in the following sizes : small, special, big, 
          deluxe and super. Celebrations could not be complete without colorful flower pot crackers.</h6>  
        </Col>
      </Row>
    </Container>

    {/* SALE IMAGE */}
    <Container className='saleImage' fluid>
      <Container>
        <h2>Try Our Products</h2>
        <Image src={diamond}/>
        <h6>We aim to make our customers satisfied and happy with all of our innovative crackers.<br></br>
        We are available and we are the best choice for your crackers needs.</h6>
      </Container>
    </Container>
    

    
    {/* CARDS */}
    <h2 className='ownProducts'>Our Own Products</h2>
    <Container className='homeCard' >
      <Row>
        <Col lg='3' md='6' sm='12'>
        <Container className='cardCol'>
          <Image src={chakkar} className='cardImage'/>
        </Container>
         <h4 className='crackName'>Chakkars</h4>
        </Col>
        <Col lg='3' md='6' sm='12' >
        <Container className='cardCol'>
          <Image src={fount} className='cardImage'/>
        </Container>
        <h4 className='crackName'>Fountains</h4>
        </Col>
        <Col lg='3' md='6' sm='12' >
        <Container className='cardCol'>
          <Image src={fancy} className='cardImage'/>
        </Container>
        <h4 className='crackName'>Fancy</h4>
        </Col>
        <Col lg='3' md='6' sm='12'>
        <Container className='cardCol'>
          <Image src={ones} className='cardImage'/>
        </Container>
        <h4 className='crackName'>One Sounds</h4>
        </Col>
      </Row>
    </Container>


    <Contact/>

    </>
  )
}

export default Home