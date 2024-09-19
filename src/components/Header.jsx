import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-black text-white">
      <h1>logo</h1>
      <nav className='space-x-4'>
        < NavLink className={(e) => e.isActive ? "text-red-400" : " "}
          to={'/about'}>Aboutpage</NavLink>
        < Link to={'/Contact'}>Contact</Link>
      </nav>
    </div>
  )
}

export default Header