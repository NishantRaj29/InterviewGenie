"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='flex items-center justify-between bg-indigo-200 shadow-md'>
      <div 
          style={{
            backgroundImage: 'url("nav2.jpg")',
            backgroundSize: 'cover',  // Ensures the image covers the whole div
            backgroundPosition: 'center',  // Centers the image
            backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
            width: '100%',
            height: '100%',
            display:'flex',
            justifyContent:'space-between',
            padding: '0.45rem',
            paddingLeft:'2rem'
          }}
        >
        <Link href={`/dashboard`}>
        <Image src={'/logo.svg'} width={50} height={30}/>
        </Link>
        {/* <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'&&'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions'&&'text-primary font-bold'}`}>Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'&&'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how'&&'text-primary font-bold'}`}>How it's works?</li>
        </ul> */}
        <Link href={`/dashboard`}>
        <span className='text-5xl font-extrabold text-purple-200'>Interview Genie</span>
        </Link>
        <UserButton/>
        </div>
    </div>
  )
}

export default Header