import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import icon from './images/icon.jpg'

const Navbar = ({ onClick, onShow }) => {
	return (
		<>
			{/* <a href='#'><FontAwesomeIcon style={{width: '100px'}} icon={ faBars } /></a> */}
			<div className='navigation-bar'>
				<FontAwesomeIcon className='bar' icon={faBars} />
				<Link to='/' className='others nav home'>
					Home
				</Link>
				<Link to='/login' className='login nav right'>
					Login/Signup
				</Link>
				<Link to='/services' className='others nav right'>
					Services
				</Link>
				<Link to='/products' className='others nav right'>
					Products
				</Link>
			</div>
		</>
	);
};

export default Navbar;
