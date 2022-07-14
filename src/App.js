import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';
import Login from './components/Login';
import ItemPage from './components/ItemPage';
import './App.css';
import DropDown from './components/DropDown';

const url = 'https://fakestoreapi.com/products';

function App() {
	const [items, setItems] = useState([]);
	const [showNavbar, setShowNavbar] = useState(false);

	const getUsers = async () => {
		const res = await fetch(url);
		const items = await res.json();
		setItems(items);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<Router>
			<div className='app'>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/products/*' element={<Products items={items} />} />
					<Route path='/services' element={<Services />} />
					<Route path='/login' element={<Login />} />
					{items.map((item) => {
						const { id } = item;
						let path = `/products/${id}`;
						return (
							<Route
								key={id}
								path={path}
								element={<ItemPage item={items[id - 1]} />}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
