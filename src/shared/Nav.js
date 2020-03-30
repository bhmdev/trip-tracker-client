import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/trips'>Trips</NavLink>
    <NavLink to='/create-trip'>Create Trip</NavLink>
  </nav>
)

export default Nav
