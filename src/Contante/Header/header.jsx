import React from 'react'
import s from './header.module.css'
import Logo from './logo.svg'

const Header = () => {
  return (
    <>
    <div className={s.header}>
      <div className={s.div__header}>
      <div>
        <img src={Logo} />
      </div>

      <div className={s.navigation}>
        <a className={s.nav} href="#">Персонажи</a>
        <a className={s.nav} href="#">Места</a>
        <a className={s.nav} href="#">Эпизоды</a>
      </div>
      </div>
    </div>
    </>
  )
}

export default Header
