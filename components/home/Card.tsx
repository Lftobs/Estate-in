import Image from "next/image"

const Card = () => {
  return (
    <>
      <div className=" bg-hero-img-bg p-5 flex relative flex-col w-auto items-center ring-1 ring-border-black rounded-xl">
        <Image src="/card-img1.svg" alt="card-img" width={80} height={80} />
        <p className="mt-8 text-balance font-semibold text-center">Find Your Dream Home </p>
        <Image src="/arrow.svg" alt="arrow" width={20} height={20}  className="absolute top-3 right-5"/>
      </div>
    </>
  )
}

export default Card