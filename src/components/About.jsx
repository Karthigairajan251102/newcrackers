import React from 'react'
import '../styles/About.css'
import Navs from '../components/Navs'
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import aboutImage from '../assets/images/about.jpg'
import diwali from '../assets/images/diwali2.avif'
import Contact from './Contact'
import { useNavigate } from 'react-router-dom';
function About() {
  const navigate = useNavigate();

  
  return (
    <>
    <Navs/>
    <Image src={aboutImage} className='aboutImage'/>
    {/* ABOUT DETAILS */}
    <Container className='aboutContainer'>
        <Row>
            <Col lg='6' md='12' sm='12' xs='12'>
            <Image src={diwali} className='aboutDiwali'/>
            </Col>
            <Col lg='6' md='12' sm='12' xs='12'>
            <h6 className='aboutPara'>
            Ignite your celebrations with Viswai Crackers! For over several years, 
            we've been lighting up moments of joy with our vibrant and high-quality fireworks. 
            From dazzling crackers to sparkling sparklers, we offer a wide range of products that 
            add excitement and color to any occasion. Join our community of happy customers and make your 
            festivities unforgettable with Viswai Crackers. Explore our collection today and let the celebration begin!
            </h6>
            <h6 className='aboutPara'>
            NEW CRACKERS is a family of delightful cracker brands and a collection of select 
            joyspreading and safe fireworks
            </h6>
            </Col>
        </Row>
    </Container>
    <Contact/>
    </>
  )
}

export default About