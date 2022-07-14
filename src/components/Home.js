import React from 'react'
import { Link } from 'react-router-dom'
import pic from './images/cart.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='full-page'>
        <section className='container'>
            <div className='text'>Welcome to <span>FakeShop!</span></div>
            <Link to='/products'><button type='button' className='btn'>Show Products</button></Link>
        </section>
        
        <img src={pic} alt={pic}/>
    </div>
  )
}

export default Home