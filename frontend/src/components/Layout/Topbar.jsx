import React from 'react'
import {TbBrandMeta} from 'react-icons/tb';
import {IoLogoInstagram} from 'react-icons/io';
import {RiTwitterXFill } from 'react-icons/ri';


const Topbar = () => {
  return (
    <div className='bg-rabbit-red text-white'>
      <div className="className container mx-auto flex justify-between items-center py-3 px-4">
        <div className='hidden md:flex items-center space-x-4'>
          <a href="#">
            <TbBrandMeta className='text-white h-5 w-5 hover:text-gray-300' />
          </a>
           <a href="#">
            <IoLogoInstagram className='text-white h-5 w-5 hover:text-gray-300' />
          </a>
           <a href="#">
            <RiTwitterXFill  className='text-white h-5 w-5 hover:text-gray-300' />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship world wide - Fast and reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+233 73 9839 987">+ (233) 73-9839-987 987</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar