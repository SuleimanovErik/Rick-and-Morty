import React from 'react'
import { Link } from 'react-router-dom'
import cardStyle from './CharBox.module.css'

const CharBox = ({card}) => {
  return (
    <Link className={cardStyle.Card} to={`/character/${card.id}`}>
        <img className={cardStyle.Character__img} src={card.image} />
          <div className={cardStyle.Name}>
            <h3>{card.name}</h3>
            <div className={cardStyle.Information}>
              <p style={{ fontSize: '18px' }}>{card.species}</p> - <p style={{ fontSize: '18px' }}>{card.gender}</p>
            </div>
          </div>
        </Link>
  )
}

export default CharBox
