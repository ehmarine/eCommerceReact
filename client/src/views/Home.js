import React from 'react'
import image from '../assets/eCommerce.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div className="container d-md-flex justify-content-between align-items-center">
      <div className="img"> 
       <Link to="/products"> <img src={image} alt="eCommerce" className="img-fluid" /></Link>
      </div>
    </div>
  )
}

export default Home
