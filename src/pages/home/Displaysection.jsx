import React from 'react'

export const Displaysection = () => {
  return (
    <section className="grid grid-cols-2 items-center sm:grid-cols-1 ">
      <div >
        <dotlottie-player src="https://lottie.host/dd2711d3-55d6-4de9-800d-00d2aaa8065a/cW8aSJ0297.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>
      <div className='space-y-3 sm:text-center sm:px-2'>
        <h1 className='font-semibold text-3xl '>Hi, I am John</h1>
        <p>Some Dev, Freelancer, Rounder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
      </div>
    </section>
  )
}
