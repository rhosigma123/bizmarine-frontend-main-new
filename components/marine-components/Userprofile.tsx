'use client'
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';

function Userprofile() {
  return (
    <section className='flex h-full relative w-auto items-center gap-2'>
        <FaRegUser className=' text-[27px] md:text-[30px] text-white cursor-pointer'/>
        <span className=' hidden md:flex flex-col  items-start '>
            <p className='text-lg font-semibold text-primary leading-[1.2]'>Hello</p> 
            <span className='w-fit relative flex items-center gap-2 '>
                <Link href={"/"} className="text-base font-medium text-white text-nowrap ">Sign In </Link>/
                <Link href={"/"} className="text-base font-medium text-white ">Register</Link>
            </span>
        </span>
    </section>
  )
}

export default Userprofile