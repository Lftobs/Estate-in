'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import PropertiesCard from "./home/PropertiesCard"
import { carouselComponentType, carouselPropsType } from "@/lib/types"



export function CarouselComponent({data, variant}: carouselPropsType) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
        <Carousel className="w-full" setApi={setApi}>
            <CarouselContent className="-ml-3 gap-1">
                {variant === "properties" && (
                    <>
                        <CarouselItem className=" basis-1/1" > <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                    </>
                )}
                {variant === "review" && (
                    <>
                        <CarouselItem className=" basis-1/1" > <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                        <CarouselItem className=" basis-1/1"> <PropertiesCard /> </CarouselItem>
                    </>
                )}
            </CarouselContent>
            <div className="relative flex justify-between items-center my-5">
                <p className="text-base font-medium">{current} <span className="opacity-70">of {count}</span></p>
                <div className="bg-red-300 relative w-0">
                    <CarouselPrevious className="-ml-14"/>
                    <CarouselNext className="mr-10"/>
                </div>
            </div>
        </Carousel>
    </>
  )
}
