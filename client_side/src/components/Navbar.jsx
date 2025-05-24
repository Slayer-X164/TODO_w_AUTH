import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full height-18 flex justify-between md:justify-around items-center md:py-8 md:px-12 py-4 px-4 text-neutral-300'>
        <h1 className='text-3xl font-semibold '>Taskify</h1>
        <button className='py-2 px-3  border-2 border-neutral-200/30  rounded-lg text-sm cursor-pointer active:scale-95 text-neutral-200 '>Log in</button>
    </div>
  )
}

export default Navbar