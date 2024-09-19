import Image from "next/image"

export const Seperator = () => {
  return (
    <div className="flex gap-3 max-lg:ml-3 max-lg:self-start self-start">
      <Image src="/star-lg.svg" width={30} height={30} alt="star" />
      <Image src="/star-sm.svg" width={20} height={20} alt="star" />
      <Image src="/star-sm.svg" width={15} height={15} alt="star" />
    </div>
  )
}