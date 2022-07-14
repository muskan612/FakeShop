import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DropDown from './DropDown';
// import icon from './images/icon.jpg'

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
		if (size > 520) setShowNavbar(false);
	};

	useEffect(() => {
		window.addEventListener('resize', checkSize);
		return () => {
			window.removeEventListener('resize', checkSize);
		};
	}, []);
	return (
		<>
			{/* <a href='#'><FontAwesomeIcon style={{width: '100px'}} icon={ faBars } /></a> */}
			<div className='navigation-bar'>
				<FontAwesomeIcon
					className='bar'
					icon={faBars}
					onClick={() => setShowNavbar(!showNavbar)}
				/>
				{showNavbar && <DropDown />}
				{size > 520 && <DropDown />}
			</div>
		</>
	);
};

export default Navbar;
