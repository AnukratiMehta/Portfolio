import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {GiGears} from 'react-icons/gi'
import {BiMessageAltDetail} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#' ? 'active' : ''}><AiOutlineBook/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#' ? 'active' : ''}><GiGears/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ''}><BiMessageAltDetail/></a>
      
    </nav>
  )
}

export default Nav