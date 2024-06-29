import Card from "@/components/home/Card";
import Stats from "@/components/home/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="relative flex items-center bg-black-btn w-full pl-28 max-w-[1600px] max-lg:flex-col-reverse max-lg:pl-0">
          <div className="relative w-1/2 flex flex-col max-lg:w-11/12">
            <h1 className="max-w-[26rem] text-balance font-bold text-[2.5rem] text-3xl max-md:text-2xl">Discover Your Dream Property with Estatein</h1>
            <p className="max-w-[80%] mt-4 opacity-70 text-sm max-lg:max-w-full">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
            <div className="mt-10 flex gap-5">
              <button className=" p-3 rounded-lg ring-1 ring-border-black ">Learn More</button>
              <button className=" p-3 rounded-lg bg-purple">Browse Properties</button>
            </div>
            <div className=" flex w-[95%] mt-12 gap-5 max-lg:grid max-lg:grid-cols-2 max-lg:w-full">
              <Stats text={`Happy Customers`} count={200}/>
              <Stats text={`Properties For Clients`} count={`10K`}/>
              <Stats text={`Years of Experience`} count={16} extra={`max-lg:last:col-span-2 max-lg:text-center`}/>
            </div>
            
            <div className="absolute -right-10 -top-5 max-lg:right-0 max-lg:left-0 max-lg:-top-24">
              <Image src="/circular-text.svg" alt="circular-text" height={100} width={100} />
            </div>
          </div>
          <div className="flex w-1/2 bg-hero-img-bg bg-[url('/hero-bg-img.svg')]  max-lg:w-11/12 max-lg:h-[35rem] max-lg:rounded-lg max-lg:mt-5 max-lg:mb-10">
            <Image src="/hero-img.svg" alt="home" width={100} height={10} style={{objectFit: 'cover', height: 'auto'}} loading='eager' className="w-full max-lg:rounded-lg"/>
          </div>
          
        </div>

        <div className=" w-full  mb-10 mt-5 ring-4 ring-border-black p-4 rounded-lg grid grid-cols-4 max-lg:grid-cols-2 gap-5 max-lg:w-11/12">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      
      <section className="mt-5 w-full max-w-[1600px]">
        n
      </section>
    </>
    
  );
}
