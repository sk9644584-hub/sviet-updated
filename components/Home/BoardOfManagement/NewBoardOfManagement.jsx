import Image from 'next/image'
import React from 'react'

const NewBoardOfManagement = ({
    headingInceter = false,
    heading = "",
    managementTeam
    ,
    inleft = false,
    isInt = false
}) => {
    return (
        <section className={` ${isInt ? " pt-4" : " pb-10"} bg-white `}>
            {heading != "" && <div div className="mb-6 mt-0">
                {inleft ?
                    <div className="bg-gray-300  text-blue-900  p-5 ">
                        <h2
                            className={`text-3xl md:text-4xl font-bold  ${headingInceter ? "text-center" : "text-left"
                                }`}
                        >
                            {heading}
                        </h2>
                    </div>
                    :
                    <h2 className={`text-3xl md:text-4xl font-bold text-blue-900 mb-2 ${headingInceter ? "text-center" : "text-left"}`} >
                        {heading}
                    </h2>
                }

            </div>}
            <div className={`container mx-auto ${isInt ? "" : "px-4"}`}>


                <div className="">
                    {managementTeam.map((member, index) => (
                        <div key={index} className="p-6  border-gray-200">
                            <div className="flex flex-col  items-center justify-center w-full gap-6">
                                <div className="flex-shrink-0 ">
                                    <Image
                                        loading="lazy"
                                        src={member.image}
                                        alt={member.name + "-picture"}
                                        width={300}
                                        height={300}
                                        className="rounded-lg max-h-[300px]"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col w-full items-center justify-center">
                                    <h1 className="text-2xl font-bold text-[#003366] mb-2">
                                        {member.name}
                                    </h1>
                                    <p className="text-lg text-gray-700 mb-4">
                                        {member.position}</p>
                                </div>

                                <div className="flex-1 md:px-20 flex flex-col w-full items-center justify-center">

                                    {
                                        member.message.map((m, i) => (
                                            <p key={i} className="text-base text-justify text-gray-700 mb-4">
                                                {m}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export { NewBoardOfManagement }