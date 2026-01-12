import React from 'react';

const SuccessSection = () => {
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold tracking-tight text-zinc-800">
                            Guaranteed Success:
                        </h2>
                        <div className="flex items-center">
                            <span className="block w-1 h-6 bg-orange-500 mr-4"></span>
                            <p className="text-lg font-semibold text-zinc-700">
                                Empowering the Next Generation: The Super 60 Batch
                            </p>
                        </div>
                        <p className="text-zinc-600 leading-relaxed">
                            Dedicated to ensuring the success of every student, the Super 60 Batch receives personalized attention, mentorship, and support from faculty members and industry experts. With a focus on holistic growth and skill development, students in this elite group are groomed to excel in both academic and professional endeavors.
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div>
                        <img
                            loading="lazy"

                            src="https://www.sviet.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAch.a46d1a27.jpeg&w=3840&q=75"
                            alt="Students learning in a modern classroom"
                            className="w-full h-auto rounded-lg shadow-xl object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SuccessSection;