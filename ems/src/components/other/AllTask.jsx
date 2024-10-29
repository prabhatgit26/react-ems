import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext);
    


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-80'>
        <div className='bg-orange-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg font-bold text-black'>Employee Name</h2>
            <h3 className='w-1/5 text-lg font-bold text-black'>New Task</h3>
            <h5 className='w-1/5 text-lg font-bold text-black'>Active Task</h5>
            <h5 className='w-1/5 text-lg font-bold text-black'>Completed</h5>
            <h5 className='w-1/5 text-lg font-bold text-black'>Failed</h5>
        </div>


        <div className='  overflow-auto'>
        {userData.map((elem, index)=>{
            return <div key={index} className='bg-slate-900 mb-2 py-2 px-4 flex justify-between border-2 border-gray-300'>
            <h2 className='w-1/5 text-lg font-medium  text-white'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium  text-blue-400'>{elem.taskCounts.new}</h3>
            <h5 className='w-1/5 text-lg font-medium  text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-lg font-medium  text-green-600'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium  text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}

export default AllTask
