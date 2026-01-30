
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative w-full h-[50vh] md:h-[64vh] text-white flex items-end pb-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="https://www.sviet.ac.in/_next/static/media/IMG_9332-scaled.ab25b903.webp"
                    alt="Super 60 Students"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Super 60
                    </h1>
                    <div className="flex items-center mt-4">
                        <span className="block w-1 h-6 bg-orange-500 mr-4"></span>
                        <p className="text-lg md:text-xl font-medium">
                            Programming for a Better Future, Today
                        </p>
                    </div>
                    <p className="mt-4 text-base md:text-lg text-gray-200">
                        Programming is not just about writing code. It's about solving
                        problems and creating possibilities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;