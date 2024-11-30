import {useState} from 'react'
import s from './header.module.css'
import Logo from './logo.svg'
import { Link, NavLink } from 'react-router-dom'


const Header = ({displey}) => {
const [burger,setBurger]=useState(false)
function BugerWindow() {
  setBurger(!burger)
}
  return (
    <>
    <div className={s.header}>
      <div className={s.div__header}>
      <div>
        <img src={Logo} />
      </div>

      <div className={s.navigation}>
        <NavLink className={s.nav} to="/">Персонажи</NavLink>
        <NavLink className={s.nav} to="/location">Места</NavLink>
        <NavLink className={s.nav} to="/episodes">Эпизоды</NavLink>
      </div>
      <div className={s.burger__div}><img onClick={BugerWindow} className={s.burger} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'}/></div>
      </div>
    </div>

    <div   className={`${burger && s.BugerWindow__div} ${!burger && s.menu}`}> 
       <div onClick={BugerWindow} className={s.divX}>
        <img src="https://cdn-icons-png.flaticon.com/512/5038/5038500.png" className={s.x} />
       </div>

       <div className={s.link}>
       <NavLink className={s.nav} to="/">Персонажи</NavLink>
        <NavLink className={s.nav} to="/location">Места</NavLink>
        <NavLink className={s.nav} to="/episodes">Эпизоды</NavLink>
       </div>

      </div>
    </>
  )
}

export default Header
