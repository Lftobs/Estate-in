import Image from "next/image"

type propsType ={
    title: string,
    img: string,
    index: number
}


const Card = ({title, img, index}: propsType ) => {
  return (
    <>
      <div key={index} className=" bg-hero-img-bg p-5 flex relative flex-col w-auto items-center ring-1 ring-border-black rounded-xl">
        <Image src={`/${img}`} alt="card-img" width={80} height={80} priority/>
        <p className="mt-8 text-balance font-semibold text-center">{title}</p>
        <Image src="/arrow.svg" alt="arrow" width={20} height={20}  className="absolute top-3 right-5 max-lg:h-4 max-lg:w-4"/>
      </div>
    </>
  )
}

export default Card