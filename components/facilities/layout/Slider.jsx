"use client"
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const Slider = ({ aboutFacility }) => {
    const [api, setApi] = React.useState()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCurrent(api.selectedScrollSnap())
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    // Manual autoplay logic
    React.useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            api?.scrollNext()
        }, 6000) // 6 seconds delay

        return () => clearInterval(interval)
    }, [api])

    return (
        <>
            <section className="relative w-full overflow-hidden group">
                {/* Carousel Container with blue background */}
                <Carousel
                    className="w-full"
                    setApi={setApi}
                    opts={{
                        loop: true
                    }}
                >
                    <CarouselContent>
                        {aboutFacility.images.map((image, index) => (
                            <CarouselItem key={index} className="flex-shrink-0 w-full group">
                                <div className="flex w-full px-2 sm:px-16 md:px-20 lg:px-36">
                                    <div className="flex-1 flex justify-center items-center">
                                        <div className="relative h-[30rem] w-[30rem] bg-gray-100 overflow-hidden rounded-lg">
                                            <Image
                                                loading="lazy"
                                                src={image}
                                                alt={aboutFacility.title}
                                                fill
                                                style={{ objectFit: "contain" }}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <div className="flex absolute bottom-2 left-1/2 transform -translate-x-1/2 justify-center gap-2 z-20">
                    {aboutFacility.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${current === index ? "w-6 bg-orange-500" : "bg-zinc-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                {/* Left Button */}
                <button
                    onClick={() => api?.scrollPrev()}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden group-hover:flex items-center justify-center h-10 w-10 rounded-md cursor-pointer bg-black/50 text-white hover:bg-black/70 transition"
                    aria-label="Previous Slide"
                >
                    &#10094;
                </button>

                {/* Right Button */}
                <button
                    onClick={() => api?.scrollNext()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 hidden group-hover:flex items-center justify-center h-10 w-10 rounded-md cursor-pointer bg-black/50 text-white hover:bg-black/70 transition"
                    aria-label="Next Slide"
                >
                    &#10095;
                </button>
            </section>
        </>

    )
}

export default Slider