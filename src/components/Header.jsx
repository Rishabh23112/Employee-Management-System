import React from 'react'

const Header = () => {

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }
  
  return (
    <div className='flex justify-between items-end text-white'>
        <h1 className='font-medium text-2xl '>Hello, <br /> <span className='text-4xl font-semibold'>User👋 </span></h1>
        <button onClick={logOutUser} className='bg-red-600 rounded-2xl px-4 py-2 font-bold cursor-pointer'>Log Out</button>
    </div> 
  )
}

export default Header