import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);

        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e)=>{submitHandler(e)}} action="" className='flex flex-col items-center justify-center'>
            <input value={email} onChange={(e)=> {setEmail(e.target.value)}}  required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input value={password} onChange={(e)=> {setPassword(e.target.value)}}  required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' />
            <button className=' mt-7 text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 rounded-full font-semibold py-2 px-5 w-full text-xl' type='submit'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
