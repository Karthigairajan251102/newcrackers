import React, { useState } from 'react'
import {Button, Col, Container, Image, Row} from 'react-bootstrap'
import '../styles/Order.css'
import orderimage from '../assets/images/onesound.jpg'
import pommai from '../assets/images/pommai.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';



function Order({title, content, close }) {

  const [success, setSuccess] = useState(null)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3mid6c9', 'template_60epwc8', form.current, {
        publicKey: 'RiYY1zgoICZbl6Dt3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <>
    <Container className='model' fluid>
      <Container className='model-container'>
        <Container className='model-close' onClick={() => close(false)}>&times;</Container>
        <Container className='model-title'>{title}</Container>
        <Container className='model-content'>
          <Container className='order-details'>
            <Row>
              <Col>
              <Container className="details-image-container">
                <Image src={pommai} className='pommmai'/>
              </Container>
              </Col>
              <Col>
              <form ref={form} onSubmit={sendEmail}>
                <Container className='name-detail mt-2'>
                  <h6>Name:</h6>
                  <input type='text' className='details-input' required name='user_name'></input>
                </Container>
                <Container className="mail-detail mt-2">
                  <h6>Email</h6>
                  <input type='text' className='details-input' required name='user_email'/>
                </Container>
                <Container className="mobile-detail mt-2">
                  <h6>Mobile</h6>
                  <input type='number' className='details-input' required name='user_mobile'></input>
                </Container>
                <Container className="mobile-detail mt-2">
                  <h6>Address</h6>
                  <input type='text' className='details-input' required name='user_address'></input>
                </Container>
                {success}
                <Container className='sendContainer'>
                  <button type='submit' value="send" className='send mt-2' onClick={() => setSuccess(<h6 className="success">Order Placed Successfully!</h6>)}>Order</button>
                </Container>
              </form>
              </Col>
            </Row>
            
          </Container>
        </Container>
        <Container className='model-footer'>
          <Button className='footer-btn' onClick={() => close(false)}>Close</Button>
        </Container>
      </Container>
    </Container> 
    </>
  )
}

export default Order