import React from 'react'
import Image from 'next/image'
import style from "../styles/navbar.module.css"
import Link from 'next/link'

// === Icons Import ======

import  {AiOutlineHeart}  from "react-icons/ai";
import  {AiOutlineUser}  from "react-icons/ai";
import {BsSearch } from "react-icons/bs";
import {BsCart } from "react-icons/bs";






function Navbar() {
  return (
    <div>
      <div className={style.nav_head}>
        <div className='header-logo'>
          <Image src="/wine-logo2.png" width="130" height="130"/>
        </div>
        <div className={style.search_box}><BsSearch style={{marginRight:'10px'}}/><input type='text' placeholder='Search'/></div>
        <div className={style.nav_links}><AiOutlineUser style={{marginRight:"5px"}}/>Sign In/Create an Account</div>
      </div>
      {/* === NavLinks=== */}
      <nav className={style.main_nav}>
        <div className={style.main_nav_link}>
          <Link href="/home">
          Home
          </Link>
          <Link href="/home">
          About
          </Link>
          <Link href="/home">
          Products
          </Link>
          <Link href="/home">
          Offers
          </Link>
          <Link href="/home">
          Contact Us
          </Link>
        
        </div>
        <div className={style.nav_link2}> <AiOutlineHeart/> <BsCart/> 1-677-124-44227</div>
      </nav>
    </div>
  )
}

export default Navbar