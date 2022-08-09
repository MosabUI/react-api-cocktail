import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import About from '../pages/About'
import Home from '../pages/Home'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt="logo"  className='logo'></img>
          
        </Link>
        <ul className="nav-links">
            <li>
              <Link to='/'>
                Home
              </Link>
              <Link to='/about'>
                About 
              </Link>
            </li>
          </ul>
      </div>
   
    </nav>
  )
}

export default Navbar
