import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' mt-20'>
        <div className='bg-indigo-500 flex items-center w-[260px] lg:w-[310px] rounded-tr-[2rem] justify-start pl-4 h-14 '>
            <Link href='https://www.linkedin.com/in/agustin-molina-994635138/' target='_blank'>
                <h1 className='text-gray-300 font-outfit'>Developed by <span className='font-outfit text-white hover:text-black duration-300 text-xl  lg:text-2xl'>Agustin Molina</span></h1>
            </Link>
        </div>
    </div>
  )
}

export default Footer
