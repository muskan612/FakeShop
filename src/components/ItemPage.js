import React from 'react';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import './Item.css';

const ItemPage = ({ item }) => {
	const {
		id,
		title,
		price,
		description,
		category,
		image,
		rating: { rate, count },
	} = item;
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!Number.isInteger(Number(document.getElementById('quantity').value))) {
			alert(`Please add quantity.`);
		} else {
			alert(
				`${
					document.getElementById('quantity').value
				} item(s) have been added to cart`
			);
		}
	};
	return (
		<>
			<div className='back'>
				<Link className='back-btn' to='/products'>
					Back to Products
				</Link>
			</div>
			<div className='prod-container'>
				{/* <Link to='/products' style={{}}>Back to Products</Link> */}
				<section className='left'>
					<img src={image} alt={image} />
				</section>
				<section className='right'>
					<p style={{ display: 'flex', marginBottom: '3px' }}>
						<span
							style={{
								fontSize: '10px',
								marginRight: '5px',
								marginBottom: '3px',
								position: 'relative',
								top: '3px',
								border: 'solid #ffd700 1px',
								borderRadius: '8px',
								padding: '2px 7px',
							}}>
							{rate}
						</span>
						<ReactStars
							count={5}
							edit={false}
							size={18}
							half={true}
							value={rate}
							onChange={null}
						/>
						<p
							style={{
								fontSize: '12px',
								marginLeft: '5px',
								position: 'relative',
								top: '4px',
							}}>
							&#91;{count} reviews&#93;
						</p>
					</p>
					<p className='title'>{title}</p>
					<p className='price'>${price}</p>
					<p className='description'>
						<span>Description:</span>
						<br /> <p>{description}</p>
					</p>
					<form className='dropdown' onSubmit={handleSubmit}>
						<label>
							<select id='quantity'>
								<option value='quantity'>Quantity</option>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
						</label>
						<input type='submit' value='Add to cart' className='submit-btn' />
					</form>
				</section>
			</div>
		</>
	);
};

export default ItemPage;
