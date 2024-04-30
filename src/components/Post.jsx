import React from 'react'

export default function Post() {
  return (
    <>
    <div className='min-w-[500px] border-2 max-w-xl flex flex-col items-center border-[#017476] p-4'>
        <h2>Title of the post</h2> 
        <div className='w-full h-[1px] bg-black' />
        <p>Content of the post</p>
    </div>
    </>
  )
}
