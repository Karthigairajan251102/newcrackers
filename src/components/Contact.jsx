import React from 'react'
import '../styles/Contact.css'
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import happy from '../assets/images/happy.jpg'
import qr from '../assets/images/qr.jpg'
import service from '../assets/images/service.png'
import delivery from '../assets/images/delivery.png'
import eco from '../assets/images/eco.png'

function Contact() {
  return (
    <>
    <Container className="contactText">
        <h1 className='contact'>Contact</h1>
    </Container>

    {/* CONTACT DETAILS */}

    <Container className='conDetails'>
        <Row>
            <Col className='smnone'>
            <Image src={happy} className='conDetailsImage'/>
            <h6>Join us in celebrating the simple joy of crunching, and let our crackers elevate your every occasion.</h6>
            </Col>
            <Col sm='6' lg='4' md='4' xs='6'>
            <h4>Social Links</h4>
            <a href=''>Instagram</a><br></br>
            <a href=''>Facebook</a>
            <Container className='email'>
            <h4>Email:</h4>
            <a href='' className='m-1'>newcrackers@gmail.com</a>
            </Container>
            <h4>Chat with us</h4>
            <h6>+91 9629196431</h6>
            <h6>+91 9150892067</h6>
            </Col>
            <Col lg='4' md='4' sm='6' xs='6'>
            <Image className='qr' src={qr}/>
            <h4>Reach us here</h4>
            <h6>2/1294, Periyar Nagar, Viswanatham, <br /> Sivakasi</h6>
            </Col>
        </Row>
    </Container>


    {/* DELIVERY DETAILS */}
    <Container className='deliveryDetails' fluid>
      <Row>
        <Col lg='4' md='4' sm='12' xs='12'>
        <Image src={service} className='deliveryIcon'/>
        <h2 className='delText'>Quality Products</h2>
        <h6 className='delText'>Without Great QUALITY it does NOT matter what something Costs..., 
          So we Don't Compromise on quality of the Product We sell exclusive Standard Fireworks products</h6>
        </Col>
        <Col lg='4' md='4' sm='12' xs='12'>
        <Image src={delivery} className='deliveryIcon'/>
        <h2 className='delText'>Delivery</h2>
        <h6 className='delText'>Free transport office delivery available toAll over TAMILNADU, KERALA,Pondicherry Bangalore Hyderabad,
          Vijayawada,Nellore& Selected citiesin Andrapradesh,Telungana& karnataka Pick your Orders from nearest 
          Transport Office.All over Tamilnadu,Pondy,AndraPradesh,,Karnataka, Kerala and Hyderabad City Transport 
          office delivery available delivery charges extra Visit FAQ section for more details.
          All over India's main cities delivery available</h6>
        </Col>
        <Col lg='4' md='4' sm='12' xs='12'>
        <Image src={eco} className='deliveryIcon's/>
        <h2 className='delText'>Eco Friendly</h2>
        <h6 className='delText'>Nowadays environment is a primary concern.So our crackers are free of harmful components, 
          like Barium, Aluminum and Chromium that are generally used in firecrackers to get different colours. 
          Instead we use Government guided ECO friendly mixture of chemicals.100%Green Crackers only</h6>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Contact