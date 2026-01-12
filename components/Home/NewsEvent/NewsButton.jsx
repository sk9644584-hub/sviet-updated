"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

const NewsButton = ({ button }) => {
    return (
        <Button
            onClick={() => {
                window.open(button.link, "_blank")
            }}

            variant={button.variant} size="sm" className="text-xs text-blue-400 hover:text-blue-500 border-blue-400 cursor-pointer"
        >
            {button.text}


        </Button>)
}

export { NewsButton }