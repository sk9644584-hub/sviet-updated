"use client"
import React from 'react'

const EventsBtn = ({ href, text = "Read More" }) => {
    return (
        <span onClick={() => {
            window.open(href, "_blank")
        }} className="cursor-pointer text-sm text-[#007bff] hover:underline">
            {text} &gt;
        </span>)
}

export { EventsBtn }