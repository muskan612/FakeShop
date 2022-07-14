import { Link } from 'react-router-dom'
import './Products.css'

const Products = ({items}) => {
  return (
    <div className='product-list-box'>
      <header>Products</header>
      <div className='items'>
        {items.map((item) => {
          const {id, title, image} = item
          let path = `/products/${id}`
          return (
            <Link to={path} key={id} style={{textDecoration: 'none'}}>
              <div className='item-card'>
                <img style={{width: '150px'}} src={image} alt={image} />
                <section>{title}</section>
              </div>
            </Link>
            // {console.log('url/id')}
          )
        })}
      </div>

    </div>
  )
}

export default Products