import React from 'react';

import Image from 'next/image';

const ImageCard = ({ item }) => {
    return (
        <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 h-72 w-full">
            <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col items-start justify-end">
                <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                >
                    View Gallery
                </a>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
        </div>
    );
};

export default function GalleryPage({ categories }) {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">Event Gallery</h1>
                <p className="text-center text-gray-500 text-lg mb-16">A visual journey through our memorable moments.</p>

                {Object.entries(categories).map(([category, items]) => (
                    <div key={category} className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-cyan-400 pl-4">{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {items.map((item, index) => (
                                <ImageCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}