import React from 'react'
import b from './style.module.css'
import { Link } from 'react-router-dom'

const CardBox = ({info}) => {
  return (
    <>
    <Link className={b.Card} to={`/location/characters/${info.id}`}>
     <div style={{display:'flex',flexDirection:'column', justifyContent:"center", alignItems:'center',rowGap:'6px'}}>
        <h3>{info.name}</h3>
        <div>
        <div>{info.type}</div>
        <h4>{info.dimension}</h4>
        </div>
      </div>
    </Link>
    </>
  )
}

export default CardBox
