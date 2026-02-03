"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import React from "react"
import { testimonials as t } from "./data"
export function StudentTestimonials({ testimonials = t }) {


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
        }, 5000) // Auto-scroll every 5 seconds

        return () => clearInterval(interval) // Cleanup on unmount
    }, [api])

    return (
        <section className="py-12 md:py-16 md:pb-8 pb-5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-[#003366] md:text-4xl mb-4">
                        Our Students Speak
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our Reviews Speak for Us
                    </p>
                </div>

                <Carousel
                    className="w-full"
                    setApi={setApi}
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                >
                    <CarouselContent className="-ml-6 cursor-grab">
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-6 basis-full md:basis-1/2 lg:basis-1/2">
                                <Card className="h-full bg-gray-50 border-0 shadow-sm">
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="flex-1 mb-6">
                                            <p className="text-gray-700 text-base leading-relaxed italic">
                                                "{testimonial.review}"
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                                <Image
                                                    loading="lazy"
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#003366]">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    {testimonial.designation}
                                                </p>
                                            </div>
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
                            className={`h-2 cursor-pointer w-2 rounded-full transition-colors ${current === index + 1 ? "bg-[#007bff]" : "bg-gray-300"
                                }`}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
