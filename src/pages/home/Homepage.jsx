import React from 'react'
import Header from '../../components/Header';
import { Displaysection } from './Displaysection';
import { Tech } from './tech';


// const Homepage = ({ age, data }) => {
//   console.log(data);
const Homepage = (props) => {


  return (
    <div className='space-y-10'>
      {/* https://pri-tail.vercel.app/ */}
      <Displaysection />
      <Tech />



    </div>
  )
}

export default Homepage
