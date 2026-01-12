"use client"
import Image from "next/image"
import { Card,CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import React from "react"
import { overviewItems } from "./OverViewItems"

export function CollegeOverview() {
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
        <section className="py-12 md:py-16 bg-gray-50 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="mb-4 text-center text-2xl font-bold text-[#003366] md:text-3xl">
                    Discover the Best Engineering Programs at SVIET                </h2>
                <p className="mx-auto mb-10 max-w-4xl text-justify text-gray-700">
                    SVIET (Swami Vivekanand Institute of Engineering & Technology) offers comprehensive engineering programs  designed  to  provide  students  with  cutting-edge  knowledge,  practical  skills,  and industry-relevant  experience.  Our  programs  combine  theoretical  excellence  with  hands-on  learning  to  create competent engineers.
                </p>

                <Carousel
                    className="w-full"
                    setApi={setApi}
                    opts={{
                        loop: true, // Enable infinite looping
                        align: "start", // Align items to the start
                    }}
                >
                    <CarouselContent className="-ml-6">
                        {" "}
                        {/* Negative margin to offset gap */}
                        {overviewItems.map((item, index) => (
                            <CarouselItem key={index} className="pl-6 cursor-grab basis-full sm:basis-1/2 lg:basis-1/3">
                                {" "}
                                {/* Responsive basis and padding for gap */}
                                <Card className="overflow-hidden rounded-lg py-0 shadow-lg group">
                                    {" "}
                                    {/* Added 'group' class */}
                                    <CardContent className="relative flex h-60 items-center justify-center p-0">
                                        <Image
                                            loading="lazy"
                                            src={item.imageQuery}
                                            alt={item.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="absolute inset-0"
                                        />
                                        {/* Overlay and text, hidden by default, visible on group-hover */}
                                        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-sm text-gray-200">{item.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* CarouselNext and CarouselPrevious components are intentionally removed as per request */}
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
        </section>
    )
}
