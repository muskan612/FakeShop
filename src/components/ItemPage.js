import React from 'react';
import ReactStars from 'react-stars';
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
	// console.log(item)
	const handleSubmit = (event) => {
		// alert(event.value);
		console.log(event.target);
		event.preventDefault();
	};
	return (
		<div className='container'>
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
							padding: '1px 7px',
						}}>
						{rate}
					</span>
					<ReactStars
						count={5}
						size='20px'
						half='true'
						value={rate}
						edit='false'
					/>
					<p
						style={{
							fontSize: '12px',
							marginLeft: '5px',
							position: 'relative',
							top: '3.3px',
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
						<select>
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
			{/* {console.log(id)}
			{console.log(title)}
			{console.log(price)}
			{console.log(description)} */}
		</div>
	);
};

export default ItemPage;
