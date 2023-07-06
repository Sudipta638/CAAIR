import React from 'react'

const AlumniCard = ({image , name}) => {
  return (
    <div className='h-36 pt-4 pb-8 w-full md:w-[600px] md:px-20 shadow-2xl flex flex-row'>
        <img src={image}  className='basis-4/12'/>
        <div className='basis-8/12 mx-6 my-4'>
            <h1 className='text-red-500'>{name}</h1>
        </div>
    </div>
  )
}

export default AlumniCard