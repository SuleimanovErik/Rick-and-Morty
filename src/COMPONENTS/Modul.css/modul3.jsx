import React from 'react'

const Modul3 = ({product}) => {
    function Product__Filter() {
    const  filter =  product.filter(item=> item.inStock==true)
    return filter.map((item,index)=> <li key={index}>{item.name}</li>)
    }
  return (
    <div>
        <ul>
      <Product__Filter></Product__Filter>
      </ul>
    </div>
  )
}

export default Modul3
