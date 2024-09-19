"use client"


import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const handleClick =() => {
        setOpen(!open)
        console.log(open)
    }
    useEffect( () => {
        if (open) { document.querySelector('body')!.style.overflow = 'hidden' } else {document.querySelector('body')!.style.overflow = 'scroll'}
    }, [open])
  return (
    <header className='flex flex-col w-full items-center py-2 text-lg bg-hero-img-bg' data-open={open}>
			<div className='relative flex items-center justify-center py-1 w-full bg-[url("/bg-img.svg")]'>
				<p className='text-sm max-md:text-xs'>✨Discover Your Dream Property with Estatein. <a href="" className='underline'>Learn more</a> </p>
				<button className='absolute right-4 max-lg:right-2'>
						<Image src='/close.svg' alt='logo' width={25} height={25} className='max-lg:w-4 max-lg:h-4'/>
				</button>
				
			</div>
			<div className='flex justify-between w-full items-center px-28 py-3 max-lg:px-10 mt-4 max-md:py-1 max-w-[1600px] max-md:mt-2 max-md:px-5' >
				<Image src='/logo.svg' alt='logo' width={120} height={120} className='max-lg:w-28 max-lg:h-20 z-20'/>
				<Image src='/line.svg' alt='logo' width={50} height={50} onClick={handleClick} className='hidden max-md:block z-20'/>
				<nav className={`max-w-82 ${open ? 'max-md:w-full max-md:flex max-md:flex-col max-md:items-center absolute top-32 right-0 z-10 backdrop-blur-lg' : 'max-md:hidden'}`}>
					<ul className='flex gap-10 justify-between max-lg:gap-5 max-md:flex-col max-md:mt-10 max-md:justify-normal max-md:items-center max-md:w-full'>
							<li ><Link href={`/`} className='bg-black-btn p-3 rounded-lg'>Home</Link></li>
							<li><Link href={`about`} className='p-3 rounded-lg'>About</Link></li>
							<li><Link href={`properties`} className='p-3 rounded-lg'>Properties</Link></li>
							<li><Link href={`services`} className='p-3 rounded-lg'>Services</Link></li>
					</ul>
					<div className='hidden max-md:flex max-md:mt-10 max-md:w-1/2 max-md:mb-12'>
					<button className={` ${open && 'bg-black-btn w-full py-2 rounded-lg font-bold '}`}>
							Contact Us
					</button>
				</div>
				</nav>
				<div className='max-md:hidden'>
					<button className='bg-black-btn px-4 py-2 rounded-lg '>
							Contact Us
					</button>
				</div>
			</div>
    </header>  
   
  )
}

export default Navigation