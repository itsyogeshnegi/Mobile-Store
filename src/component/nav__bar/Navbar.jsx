import React, { useState } from 'react'
import Responsive_menu from '../responsive_menu/Responsive_menu'
import './Navbar.css'
function Navbar() {

  const [hit , not_hit] = useState(100)
  const btn_menu = () => {

    not_hit (20)
      
  }
  

  return (
    <div className='main__navbar'>

         <div className='nav_logo'>
          <img src='https://purepng.com/public/uploads/large/google-stadia-logo-3cx.png'/></div>
    
         <div className='navbar__menu'>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Market</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Offers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
              </ul>
        </div>

        <div className='search__bar'>

        </div>

        <Responsive_menu value={hit}/>
        <div className='responsive_menu_btn'>
        <i class="fa-solid fa-bars" onClick={btn_menu}>
        </i>
        </div>


         <div className='navbar__icons'>
         <ul>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>For Business</a></li>
          </ul>
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-user"></i>
        </div>



    </div>
  )
}

export default Navbar