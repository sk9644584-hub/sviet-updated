"use client"
import Image from 'next/image'
import React from 'react'

const NaacImages = ({ src, idx }) => {
    return (
        <div className="overflow-hidden rounded-md border-4 border-gray-400 cursor-pointer">

            <Image
                loading="lazy"
                onClick={() => window.open(src, "_blank")}
                src={src}
                alt={idx + "1"}
                width={350}
                height={550}
                className="transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>

    )
}

export { NaacImages }