import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const Routelayout = () => {
  return (
    <div>

      <Header />
      <Outlet />

    </div>
  )
}

export default Routelayout