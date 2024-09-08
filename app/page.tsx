import Card from "@/components/home/Card";
import PropertiesCard from "@/components/home/PropertiesCard";
import Stats from "@/components/home/Stats";
import { cardData, shimmer, toBase64 } from "@/lib/Helpers";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CarouselComponent } from "@/components/Carousel";

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
            <Image src="/hero-img.svg" alt="home" width={100} height={100} style={{objectFit: 'cover'}} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} loading='eager' className="w-full max-lg:rounded-lg"/>
          </div>
          
        </div>

        <div className=" w-full  mb-10 mt-5 ring-4 ring-border-black p-4 rounded-lg grid grid-cols-4 max-lg:grid-cols-2 gap-5 max-lg:w-11/12">
          {cardData?.map((data, index) => {
            return (
              <Card title={data.title} img={data.img} index={index} key={index}/>
            )
          })}
        </div>
      </section>
      
      <section className="mt-8 w-11/12 max-w-[1600px] lg:w-full flex flex-col items-center max-lg:items-center">
        <div className="flex gap-3 max-lg:ml-3 max-lg:self-start self-start">
          <Image src="/star-lg.svg" width={40} height={40} alt="star" />
          <Image src="/star-sm.svg" width={30} height={30} alt="star" />
          <Image src="/star-sm.svg" width={20} height={20} alt="star" />
        </div>
        <div className="mt-6 w-[98%] max-md:w-11/12">
          <div className="flex items-center justify-between mb-5 max-lg:flex-col">
            <div className="ml-4 w-3/4 max-lg:w-11/12">
              <h1 className="text-3xl font-bold mb-5">Featured properties</h1>
              <p className="opacity-70 text-sm ">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click &ldquo;View Details&ldquo; for more information.</p>
            </div>
            <button className="self-end p-3 rounded-lg  font-semibold ring-1 ring-border-black bg-hero-img-bg max-lg:hidden">View All Properties</button>
          </div>
          <div className="mb-5 mt-10 w-full">
            <CarouselComponent data={{}} variant="properties" />
          </div>
          
          
        </div>
        

      </section>

      <section className="mt-8 w-11/12 max-w-[1600px] lg:w-full flex flex-col items-center max-lg:items-center">
        <div className="flex gap-3 max-lg:ml-3 max-lg:self-start self-start">
          <Image src="/star-lg.svg" width={40} height={40} alt="star" />
          <Image src="/star-sm.svg" width={30} height={30} alt="star" />
          <Image src="/star-sm.svg" width={20} height={20} alt="star" />
        </div>
        <div className="mt-6 w-[98%] max-md:w-11/12">
          <div className="flex items-center justify-between mb-5 max-lg:flex-col">
            <div className="ml-4 w-3/4 max-lg:w-11/12">
              <h1 className="text-3xl font-bold mb-5">What Our Clients Say</h1>
              <p className="opacity-70 text-sm ">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
            </div>
            <button className="self-end p-3 rounded-lg  font-semibold ring-1 ring-border-black bg-hero-img-bg max-lg:hidden">View All Testimonials</button>
          </div>
          <div className="mb-5 mt-10 w-full">
            <CarouselComponent data={{}} variant="review" />
          </div>
          
          
        </div>
        

      </section>

      <section className="mt-8 w-11/12 max-w-[1600px] lg:w-full flex flex-col items-center max-lg:items-center">
        <div className="flex gap-3 max-lg:ml-3 max-lg:self-start self-start">
          <Image src="/star-lg.svg" width={40} height={40} alt="star" />
          <Image src="/star-sm.svg" width={30} height={30} alt="star" />
          <Image src="/star-sm.svg" width={20} height={20} alt="star" />
        </div>
        <div className="mt-6 w-[98%] max-md:w-11/12">
          <div className="flex items-center justify-between mb-5 max-lg:flex-col">
            <div className="ml-4 w-3/4 max-lg:w-11/12">
              <h1 className="text-3xl font-bold mb-5">Frequently Asked Questions</h1>
              <p className="opacity-70 text-sm ">Find answers to common questions about Estatein&apos;s services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way.</p>
            </div>
            <button className="self-end p-3 rounded-lg  font-semibold ring-1 ring-border-black bg-hero-img-bg max-lg:hidden">View All FAQs</button>
          </div>
          <div className="mb-5 mt-10 w-full">
            <CarouselComponent data={{}} variant="faqs" />
          </div>
          
          
        </div>
        

      </section>
    </>
    
  );
}
