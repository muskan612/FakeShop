import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({ items }) => {
	return (
		<div className='product-list-box'>
			<header>Products</header>
			<div className='items'>
				{items.map((item) => {
					const { id, title, image, price } = item;
					let path = `/products/${id}`;
					return (
						<Link to={path} key={id} style={{ textDecoration: 'none' }}>
							<div className='item-card'>
								<img style={{ width: '150px' }} src={image} alt={image} />
								<div className='info'>
									<section className='title'>{title}</section>
									<section className='price'>${price}</section>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Products;
