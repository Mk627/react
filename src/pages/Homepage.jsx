import React from 'react'

// const Homepage = ({ age, data }) => {
//   console.log(data);
const Homepage = (props) => {
  const { age, data } = props;
  console.log(age);

  return (
    <div className='p-4'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, rerum!</p>
    </div>
  )
}

export default Homepage
