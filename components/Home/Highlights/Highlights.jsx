"use client"
import React from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"

const Highlights = ({ isShown = false, keyHighlights }) => {
    const [api, setApi] = React.useState()
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

    // Auto-scroll logic
    React.useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
                api.scrollTo(0) // Loop back to the start
            } else {
                api.scrollNext()
            }
        }, 4000) // Auto-scroll every 4 seconds

        return () => clearInterval(interval) // Cleanup on unmount
    }, [api])


    return (

        <section className={`${isShown ? "bg-white" : "bg-gray-50"} py-12 sm:pb-4 md:py-16 lg:py-20`}  >
            <div className="container mx-auto px-4  md:px-6">
                <h2 className={`${isShown ? "mb-0" : "mb-10"} text-center text-3xl font-bold text-[#003366] md:text-4xl`}>Why Choose Us?</h2>
                <Carousel
                    className="w-full"
                    setApi={setApi}
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                >
                    <CarouselContent className="-ml-6 cursor-grab  py-6">
                        {keyHighlights.map((item, index) => (
                            <CarouselItem key={index} className="pl-6  basis-full sm:basis-1/2 lg:basis-1/3">
                                <Card className="overflow-hidden sm:h-96 sm:min-h-96 sm:max-h-96 min-h-[22rem] h-[22rem]  max-h-[22rem]  pt-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-lg shadow-lg">
                                    <CardContent className="p-0">
                                        <div className="relative h-56 w-full">
                                            <Image
                                                src={item.imageQuery}
                                                alt={item.title}
                                                layout="fill"
                                                loading="lazy"
                                                objectFit="cover"
                                                className="absolute  inset-0"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm text-gray-700">{item.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 cursor-pointer rounded-full ${current === index + 1 ? "bg-[#007bff]" : "bg-gray-300"}`}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section >
    )
}

export { Highlights }