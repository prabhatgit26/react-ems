import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [userName, setUserName] = useState('');

  // if (!data) {
  //   setUserName('Admin')
  // }
  // else{
  //   setUserName(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','');
    props.changeUser('');
     window.location.reload()
  }
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold text-orange-600'>{props.firstName} 👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
