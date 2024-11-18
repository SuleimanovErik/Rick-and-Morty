import React from 'react'

const Shop = (props) => {
  
  return (
    <div>
    <h1>{props.title}</h1>
    <h2>{props.suptitle}</h2>
    <div style={{border:"2px solid orange", pading:"15px"}}>{props.children}</div>
    </div> 
  )
}

export default Shop
