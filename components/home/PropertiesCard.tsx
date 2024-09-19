import Image from 'next/image'


const PropertiesCard = () => {
  return (
    <div className='w-auto max-w-[28rem] max-lg:w-[19.8rem] p-4 overflow-x-hidden px-5 ring-1 ring-border-black rounded-xl hover:shadow-slate-700 hover:shadow'>
        <div className='w-full h-72 relative'>
          <Image fill src='/dispose/p1.svg' className='w-full h-full rounded' alt='i'/>
        </div>

        <h2 className='text-xl font-bold my-3'>Seaside Serenity Villa</h2>
        <p className='w-full'><small className=' opacity-70 text-sm'>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... </small><a href="" className=' underline text-white'>Read More</a></p>

        <div className='flex justify-between mt-5 max-lg:grid max-lg:grid-cols-2 max-lg:gap-3'>
            <span className='flex gap-1 items-center bg-hero-img-bg p-2 rounded-full ring-1 ring-border-black'>
              <Image src='/bed.svg' alt='bed' width={20} height={20} />
              <p className='text-sm'>4-Bedroom</p>
            </span>
            <span className='flex gap-1 items-center bg-hero-img-bg p-2 rounded-full ring-1 ring-border-black'>
              <Image src='/bathroom.svg' alt='bed' width={20} height={20} />
              <p className='text-sm'>3-Bathroom</p>
            </span>
            <span className='flex gap-1 max-w-20 justify-center items-center bg-hero-img-bg p-2 rounded-full ring-1 ring-border-black'>
              <Image src='/villa.svg' alt='bed' width={20} height={20} />
              <p className='text-sm'>Villa</p>
            </span>
            
        </div>
        <div className='flex items-center justify-between mt-5'>
            <div>
                <small className='opacity-70 text-sm'>Price</small>
                <p className='font-bold text-lg max-lg:text-base'>$550,000</p>
            </div>
            <button className='bg-purple p-3 px-4 rounded-lg max-lg:text-sm'>View Property Details</button>
        </div>
    </div>
  )
}

export default PropertiesCard