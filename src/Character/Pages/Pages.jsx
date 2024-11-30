import React from 'react'
import RickAndMorty from '../Title/title'
import Character from '../card__character/Character'
import styles from './Pages.module.css'

const FullMainList = () => {
  return (
    <>
    <RickAndMorty></RickAndMorty>
    <div className={styles.div__contain}>
        <div className={styles.contain}>
            <Character></Character>
        </div>
    </div>
    </>
  )
}

export default FullMainList
