import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  return (
    <header className='flex flex-col w-full items-center py-2 text-lg bg-hero-img-bg'>
        <div className='relative flex items-center justify-center py-1 w-full bg-[url("/bg-img.svg")]'>
            <p className='text-sm'>✨Discover Your Dream Property with Estatein. <a href="" className='underline'>Learn more</a> </p>
            <button className='absolute right-4'>
                <Image src='/close.svg' alt='logo' width={25} height={25} />
            </button>
            
        </div>
        <div className='flex justify-between w-full items-center px-28 max-lg:px-10 mt-8 max-w-[1600px]'>
            <Image src='/logo.svg' alt='logo' width={120} height={120} />
            <nav className='max-w-82'>
                <ul className='flex gap-10 justify-between max-lg:gap-5'>
                    <li ><Link href={`/`} className='bg-black-btn p-3 rounded-lg'>Home</Link></li>
                    <li><Link href={`about`} className='p-3 rounded-lg'>About</Link></li>
                    <li><Link href={`properties`} className='p-3 rounded-lg'>Properties</Link></li>
                    <li><Link href={`services`} className='p-3 rounded-lg'>Services</Link></li>
                </ul>
            </nav>
            <div>
                <button className='bg-black-btn px-4 py-2 rounded-lg'>
                    Contact Us
                </button>
            </div>
        </div>
    </header>  
   
  )
}

export default Navigation