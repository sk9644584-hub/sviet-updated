"use client"

import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import React from "react"
import BlurText from "@/components/ui/BlurText"

export function HeroSection({ images }) {
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
                        {images.map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="flex items-center justify-center w-full h-full">
                                    <div className="relative flex items-center justify-center w-full h-[320px] md:h-[410px] lg:h-[490px] bg-blue-400">
                                        <Image
                                            src={images[index].imageUrl}
                                            alt={`College Banner ${index + 1}`}
                                            fill
                                            loading="lazy"
                                            style={{ objectFit: 'cover' }}
                                            className="z-0"
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* Pagination Dots */}
                <div className="flex absolute bottom-3 left-1/2 transform -translate-x-1/2 justify-center gap-2 z-20">
                    {Array.from({ length: images.length }).map((_, index) => (
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

            <section className="py-6 flex items-center justify-center  ">
                <h2 className=" text-gray-800 sm:text-3xl font-extrabold leading-tight max-w-3xl px-4">
                    <BlurText
                        text="Shaping Visionaries Through Education and Innovation Since 2004"
                        delay={20}
                        animateBy="words"
                        direction="top"
                        className="flex justify-center text-gray-800 sm:text-3xl font-extrabold leading-tight max-w-3xl px-4"
                    />
                    {/* Shaping Visionaries Through Education and Innovation Since 2004 */}
                </h2>
            </section>

        </>

    )
}
