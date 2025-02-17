import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useRef, useState } from "react";
import { Button,Container,Image, Row, Col } from 'react-bootstrap';
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navs.css"
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../redux/Store'
import Admin from './Admin';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import cartIcon from '../assets/images/cart.jpg'
import store from '../redux/Store';

function Navs() {

    const navRef = useRef();
	const[showInput, setShowInput]=useState(false)

    const handleClick =()=>{
        setShowInput(true)
    }
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
    <>
	<Provider store={store}>
    <header className='fixed-top'>
			<h3>Crackers</h3>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/purchase">Purchase</a>
				<Admin/>	
				<Button className='pricebtn'><a href='./assets/images/pricelist.pdf' download="Pricelist" >Price</a></Button>
				<a href="/cart"><Image src={cartIcon} className='cartIcon'/></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                
			</nav>

			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			
		</header>

		</Provider>
    </>
  )
}

export default Navs