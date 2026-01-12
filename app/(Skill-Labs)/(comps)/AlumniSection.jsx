"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

// Using placeholders. Replace these with your actual image paths.
const alumniImages = [
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.b187027e.png&w=3840&q=75",
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.db6636cb.jpeg&w=3840&q=75",
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2%20(2).4c3ad6ff.jpeg&w=3840&q=75",
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F13.d6bad8f8.jpeg&w=3840&q=75",
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3%20(2).52581c81.jpeg&w=3840&q=75",
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4%20(2).e964198c.jpeg&w=3840&q=75",
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.f89b448a.png&w=3840&q=75",
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.f9c46449.jpg&w=3840&q=75",
    "https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10.4d0c8f64.png&w=3840&q=75",
];

export function AlumniSection() {
    const [api, setApi] = React.useState()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    React.useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext()
            } else {
                api.scrollTo(0)
            }
        }, 4000)

        return () => clearInterval(interval)
    }, [api])

    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                        Our Proud Alumini
                    </h2>
                    <div className="flex items-center mt-4">
                        <span className="block w-1 h-6 bg-orange-500 mr-4"></span>
                        <p className="text-lg text-zinc-700">
                            Know What They Have To Say About SVIET
                        </p>
                    </div>
                </div>

                {/* Carousel */}
                <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    {/* --- CHANGE HERE: Restored original margin for a wider gap --- */}
                    <CarouselContent className="-ml-8">
                        {alumniImages.map((imgSrc, index) => (
                            // --- CHANGE HERE: Reverted to show 3 larger images on desktop ---
                            <CarouselItem key={index} className="pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                                <Card className="overflow-hidden rounded-lg p-0 shadow-lg">
                                    <CardContent className="p-0">
                                        <img
                                            loading="lazy"
                                            src={imgSrc}
                                            alt={`Alumni ${index + 1}`}
                                            className="aspect-square h-full w-full object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {/* Use alumniImages.length for the dot count, not the carousel's internal count */}
                    {Array.from({ length: alumniImages.length }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
                                // Use the modulo operator to correctly highlight the active dot in a loop
                                (current % alumniImages.length) === index
                                    ? "w-6 bg-orange-500"
                                    : "bg-zinc-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}