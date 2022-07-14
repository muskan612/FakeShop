import React from 'react'
import './Dummy.css'

const ItemPage = ({item}) => {
    const {id, title, price, description, category, image, rating} = item
    // console.log(item)
  return (
    <div className='dummy'>
        Item
        {console.log(id)}
        {console.log(title)}
        {console.log(price)}
        {console.log(description)}
    </div>
  )
}

export default ItemPage