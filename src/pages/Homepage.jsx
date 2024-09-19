import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

// const Homepage = ({ age, data }) => {
//   console.log(data);
const Homepage = (props) => {
  const { age, data } = props;
  console.log(age);

  return (
    <div className='p-4 , space-x-4'>
      < Header />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, rerum!</p>
      < NavLink to={'/Page1'}>page1</NavLink>
      < NavLink to={'/Page2'}>page2</NavLink>
      <Outlet />
    </div>
  )
}

export default Homepage
