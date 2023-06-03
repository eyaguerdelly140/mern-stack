import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import pic from './pic.png'
function Navbar() {
  return (

    <nav className='nav'>
      <img src={pic} id='picxx'/>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link> 
      <Link to='/lineup'>Lineup</Link>
    </nav>
  )
}

export default Navbar