"use client"

import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

// Temporary data for the carousel cards
const advantageData = [
    {
        title: "Internship Opportunities",
        description: ` Super 60 students gain priority access to coveted internship
              opportunities with leading companies, enhancing their practical
              skills and industry experience.`,
    },
    {
        title: "Career Development Programs",
        description: ` The Super 60 Batch offers specialized career development programs
              designed to equip students with the skills and knowledge needed to
              excel in their chosen fields.`,
    },
    {
        title: "Specialized Curriculum",
        description: ` The Super 60 Batch offers a specialized curriculum tailored to
              nurture and develop the talents of high-performing students.`,
    },
    {
        title: "Exclusive Mentorship",
        description: `Students in the Super 60 Batch receive exclusive mentorship from
              top faculty members and industry experts, providing personalized
              guidance and support.`,
    },
    {
        title: "Internship Opportunities",
        description: `  Super 60 students gain priority access to coveted internship
              opportunities with leading companies, enhancing their practical
              skills and industry experience.`,
    },
    {
        title: "              Career Development Programs",
        description: ` The Super 60 Batch offers specialized career development programs
              designed to equip students with the skills and knowledge needed to
              excel in their chosen fields.`,
    },
    {
        title: "Specialized Curriculum",
        description: `  The Super 60 Batch offers a specialized curriculum tailored to
              nurture and develop the talents of high-performing students.`
    }
    ,
    {
        title: "Exclusive Mentorship",
        description: ` Students in the Super 60 Batch receive exclusive mentorship from
              top faculty members and industry experts, providing personalized
              guidance and support.`
    },
    {
        title: "Internship Opportunities",
        description: ` Super 60 students gain priority access to coveted internship
              opportunities with leading companies, enhancing their practical
              skills and industry experience.`
    },
    {
        title: "Career Development Programs",
        description: `The Super 60 Batch offers specialized career development programs
              designed to equip students with the skills and knowledge needed to
              excel in their chosen fields.`
    }
];


export function AdvantageSection() {
    const [api, setApi] = React.useState()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    // Manual autoplay logic
    React.useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
                api.scrollTo(0) // Loop back to the start
            } else {
                api.scrollNext()
            }
        }, 6000) // 6 seconds delay

        return () => clearInterval(interval) // Cleanup on unmount
    }, [api]) // Re-run effect if api changes


    return (
        <section className="bg-slate-900 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        The Super 60 Advantage
                    </h2>
                    <div className="flex items-center mt-4">
                        <span className="block w-1 h-6 bg-orange-500 mr-4"></span>
                        <p className="text-lg text-slate-300">Why Us?</p>
                    </div>
                </div>

                {/* Carousel Implementation */}
                <Carousel
                    className="w-full"
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-8">
                        {advantageData.map((item, index) => (
                            <CarouselItem key={index} className="pl-8 basis-full sm:basis-1/2 lg:basis-1/3">
                                {/* --- START OF CHANGE --- */}
                                <div className="group relative h-64 rounded-lg bg-slate-800 p-6 overflow-hidden cursor-grab">

                                    {/* Title Container (Visible by default) */}
                                    <div className="absolute inset-0 flex items-center justify-center text-center p-4 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-95">
                                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                    </div>

                                    {/* Description Container (Hidden by default) */}
                                    <div className="absolute inset-0 flex items-center justify-center text-center p-4 transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
                                        <p className="text-slate-300">{item.description}</p>
                                    </div>

                                </div>
                                {/* --- END OF CHANGE --- */}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <div className="flex absolute -bottom-5 left-1/2 transform -translate-x-1/2 justify-center gap-2 z-20">
                    {Array.from({ length: advantageData.length }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${current === index ? "w-6 bg-orange-500" : "bg-zinc-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}