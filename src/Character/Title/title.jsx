import React, {useContext} from 'react'
import Title from './title.svg'
import t from './title.module.css'
import { UserContext } from '../../UserContext/User'



const RickAndMorty = () => {
  const providerData= useContext(UserContext)
  console.log(providerData)
  return (
    <div style={{display:'flex', justifyContent:'center', top:'90px', position:'relative'}}>
      <img className={t.Title}  src={Title}/>
    </div>
  )
}

export default RickAndMorty

