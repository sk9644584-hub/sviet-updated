import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'

const BoardOfManagement = ({ self = true, inleft = false, headingInceter = false, heading = "", managementTeam, isInt = false }) => {
   
    return (
        <section className={`${isInt ? " pt-4" : " py-0"} bg-white`}>
            {inleft && <div className="bg-gray-300  text-blue-900  px-4 md:px-8 py-5">
                <h2
                    className={`text-3xl md:text-4xl font-bold   ${headingInceter ? "text-center" : "text-left"
                        }`}
                >
                    {heading}
                </h2>
            </div>}
            <div className={`container mx-auto ${isInt ? "" : "px-4 lg:px-14"}`}>
                {heading != "" && (
                    <div className="mb-10">
                        {!inleft && <h2
                            className={`text-3xl md:text-4xl font-bold text-blue-900 mb-2 ${headingInceter ? "text-center" : "text-left"
                                }`}
                        >
                            {heading}
                        </h2>}
                    </div>
                )}

                <div className="space-y-16">
                    {managementTeam.map((member, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row lg:px-2 xl:px-12 xl:gap-5 gap-10  items-center `}
                        >
                            <div
                                className={`${isInt ? "space-y-0" : "space-y-6"} lg:max-w-2xl `}
                            >
                                <div>
                                    <Badge className="bg-blue-100 text-blue-800 mb-4">
                                        {member.position}
                                    </Badge>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                                        {member.name}
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-sm text-justify leading-relaxed italic">
                                    "{member.message}"
                                </p>
                            </div>

                            <div
                                className={`relative rounded-lg shadow-md md:shadow-none w-full h-[20rem] `}
                            >
                                <Image
                                    loading="lazy"
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="   object-contain"
                                />
                                <div className="absolute md:right-35 lg:-right-2 -bottom-7 -right-2 bg-gray-50 shadow-md p-4 rounded-lg ">
                                    <div className="text-center">
                                        <p className="font-bold text-blue-900 text-sm">
                                            {member.name}
                                        </p>
                                        <p className="text-gray-600 text-xs">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >

    )
}

export { BoardOfManagement }