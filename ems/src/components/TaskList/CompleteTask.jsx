import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-900 border-[5px] border-green-500 rounded-sm'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='mt-10'>
            <button className='w-[55%] rounded-sm p-1 bg-green-800 '>Task Completed ✓</button>
        </div>
      </div>
  )
}

export default CompleteTask
