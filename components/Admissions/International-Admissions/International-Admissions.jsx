"use client"
import React from 'react'
import { images, keyHighlights, managementTeam } from './data'
import { BoardOfManagement } from '@/components/Home'
import {
    Carousel, CarouselContent,
    CarouselItem
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { EmpowerYourFuture } from './EmpowerYourFuture'
import { StudentTestimonials } from './StudentTestimonials'
const InternationalAdmissions = ({ overviews }) => {
    const [api, setApi] = React.useState()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)


    const [api2, setApi2] = React.useState()
    const [current2, setCurrent2] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
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

    React.useEffect(() => {
        if (!api2) {
            return
        }

        setCount2(api2.scrollSnapList().length)
        setCurrent2(api2.selectedScrollSnap() + 1)

        api2.on("select", () => {
            setCurrent2(api2.selectedScrollSnap() + 1)
        })
    }, [api2])
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

    // Auto-scroll logic for second carousel
    React.useEffect(() => {
        if (!api2) return

        const interval2 = setInterval(() => {
            if (api2.selectedScrollSnap() === api2.scrollSnapList().length - 1) {
                api2.scrollTo(0) // Loop back to the start
            } else {
                api2.scrollNext()
            }
        }, 4000) // Auto-scroll every 4 seconds

        return () => clearInterval(interval2) // Cleanup on unmount
    }, [api2])
    return (
        <>
            <section className="pt-8 pb-0 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Overview

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            {overviews.length > 0 && overviews.map((overview, index) => (
                                <div className="flex items-start text-base m-1" key={index}>
                                    <p className='text-justify'>
                                        {overview}
                                    </p>
                                </div>
                            ))}
                            <div className="mt-4 rounded-md overflow-hidden text-gray-700 aspect-video">
                                <iframe
                                    src={`https://www.youtube.com/embed/M5nNS8EQ9OA`}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-5 md:pt-12  ">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="mb-6 text-center text-2xl font-bold text-[#003366] md:text-3xl">
                        Why Choose Us ?               </h2>


                    <Carousel
                        className="w-full"
                        setApi={setApi2}
                        opts={{
                            loop: true, // Enable infinite looping
                            align: "start", // Align items to the start
                        }}
                    >
                        <CarouselContent className="-ml-6 cursor-grab pb-1 pt-2 sm:pt-5">
                            {" "}
                            {/* Negative margin to offset gap */}
                            {keyHighlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <CarouselItem key={index} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                                        {/* Responsive basis and padding for gap */}
                                        <Card
                                            key={index}
                                            className="shadow-md hover:shadow-lg h-72  min-h-72 max-h-72  sm:h-[19rem]  sm:min-h-[19rem] sm:max-h-[19rem] transition-all duration-300 transform hover:-translate-y-2"
                                        >
                                            <CardContent className="p-6 text-center">
                                                <div
                                                    className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}
                                                >


                                                    <Icon className="h-8 w-8" />

                                                </div>
                                                <h3 className="text-xl font-bold text-blue-900 mb-3">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        {/* CarouselNext and CarouselPrevious components are intentionally removed as per request */}
                    </Carousel>
                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: count2 }).map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 w-2 cursor-pointer rounded-full ${current2 === index + 1 ? "bg-[#007bff]" : "bg-gray-300"}`}
                                onClick={() => api2?.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <EmpowerYourFuture />
            <section className="pt-5  md:pb-0  bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-full  overflow-visible mx-auto">

                        <BoardOfManagement heading='Director –International Affairs' isInt={true} managementTeam={managementTeam} />

                    </div>
                </div>
            </section>

            <section className="pt-15  pb-5 md:pt-15  ">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="mb-4 text-center text-2xl font-bold text-[#003366] md:text-3xl">
                        Campus Life                </h2>


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
                            {images.map((item, index) => (
                                <CarouselItem key={index} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                                    {" "}
                                    {/* Responsive basis and padding for gap */}
                                    <Card className="overflow-hidden rounded-lg py-0 shadow-lg group">
                                        {" "}
                                        {/* Added 'group' class */}
                                        <CardContent className="relative flex h-60 items-center justify-center p-0">
                                            <Image
                                                loading="lazy"
                                                src={item}
                                                alt={`${`image-` + 1}`}
                                                fill
                                                className="absolute object-cover inset-0"
                                            />

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
            <StudentTestimonials />

        </>
    )
}

export { InternationalAdmissions }