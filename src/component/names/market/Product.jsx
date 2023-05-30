import React from 'react'
import './Product.css'
function Product({item__photo , item__name , item__value, item__tag}) {
  return (
    <div className='item'>
        <div className={`tags ${item__tag?"show":""}`}>Best seller</div>
        <div className='img__item'><img src={item__photo}/>
        </div>
        <div className='item__name'>{item__name}</div>
        <div className='item__price'>{item__value}</div>
        <button id='btn'>Buy Now</button>
    </div>
  )
}

export default Product