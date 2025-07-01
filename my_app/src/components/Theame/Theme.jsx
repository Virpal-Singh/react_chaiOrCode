import React, { useEffect,useContext, useState } from 'react'
import img1 from '../../assets/img2.jpg'


function Theme() {
    
  return (
    
    <div className='bg-white w-screen h-[500px] flex flex-col items-center mt-5 dark:bg-gray-900' >    
        
        <div className='w-[300px] h-[350px]  mt-7  p-3 rounded-lg bg-white overflow-auto dark:bg-gray-500 shadow-2xl'>
            <img  className='w-[280px] h-auto rounded-lg' src={img1} alt="" />
            <div className='h-auto w-3xl mt-3'>
                <p className='text-black font-bold text-lg dark:text-white'>Apple watch Searies 7 Gps Aluminium Case,Straight-spot</p>
            </div>
            <div className='flex justify-start mt-3'>
                <p>⭐⭐⭐⭐⭐</p>
                <p className='bg-blue-100 rounded-lg px-2 text-blue-900 dark:bg-white-400 dark:text-black'>4.0</p>
            </div>
            <div className='flex justify-between mt-3'>
                <h1 className='font-bold text-2xl text-black dark:text-white'>$599</h1>
                <button className='bg-blue-700 p-2 rounded-lg  text-white dark:bg-white dark:text-black'>Add to cart</button>
            </div>
        </div>
    </div>
    
  )
}

export default Theme