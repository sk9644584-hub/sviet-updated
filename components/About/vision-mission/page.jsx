import React from 'react'

const missionPoints = [
    {
        title: "Empowering Students",
        description:
            "Our mission is to inspire and empower students to reach for the stars, guiding them towards academic excellence and personal growth."
    },
    {
        title: "Driving Positive Change",
        description:
            "We strive to be a catalyst for positive change in society, fostering innovation and leadership among our students."
    },
    {
        title: "Fostering Community Engagement",
        description:
            "We are committed to fostering community engagement, encouraging our students to become active participants in creating a better world."
    },
    {
        title: "Promoting Diversity and Inclusion",
        description:
            "Our mission includes promoting diversity and inclusion, ensuring that every student feels valued and respected."
    }
]

const visionPoints = [
    {
        title: "Pursuing Excellence",
        description:
            "Our vision is to create a world-class educational institution that nurtures talent and fosters a culture of excellence."
    },
    {
        title: "Building Leaders",
        description:
            "We envision a future where our graduates are leaders and innovators, making a positive impact on the world."
    },
    {
        title: "Global Impact",
        description:
            "Our vision includes making a global impact, collaborating with partners worldwide to address pressing challenges."
    },
    {
        title: "Sustainable Future",
        description:
            "We are committed to creating a sustainable future, integrating environmental responsibility into everything we do."
    }
]
const VisonAndMission = () => {
    return (
        <>

            <div className="min-h-screen bg-gray-50">
                {/* Hero Section - Same as About Page */}


                {/* Vision & Mission Content */}
                <section className="md:py-20 py-10 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-20">
                            {/* Mission Section */}
                            <div className="relative">
                                <div className="md:mb-16 mb-8">
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                        MISSION
                                    </h2>
                                    <div className="w-18 h-1 bg-yellow-400 mt-4"></div>
                                </div>

                                <div className="relative pl-8">
                                    {/* Enhanced Vertical Line */}
                                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-sm"></div>

                                    <div className="space-y-16">
                                        {missionPoints.map((point, index) => (
                                            <div key={index} className="relative">
                                                {/* Enhanced Number Circle */}
                                                <div className="absolute -left-8 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white z-10">
                                                    {index + 1}
                                                </div>

                                                {/* Enhanced Content Card */}
                                                <div className="bg-gradient-to-br from-blue-50 to-white sm:p-8 p-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border max-h-44 min-h-44 h-44 border-blue-100">
                                                    <h3 className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.35rem] font-bold text-blue-900 sm:mb-4 lg:mb-1.5 mb-1 leading-[1.1]">
                                                        {point.title}
                                                    </h3>
                                                    <p className="text-gray-700 leading-relaxed md:text-sm lg:text-[0.8.5rem] text-[0.775rem]">
                                                        {point.description}
                                                    </p>
                                                    <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Vision Section */}
                            <div className="relative">
                                <div className="md:mb-16 mb-8 text-right">
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                        VISION
                                    </h2>
                                    <div className="w-18 h-1 bg-yellow-400 mt-4 ml-auto"></div>
                                </div>

                                <div className="relative pr-8">
                                    {/* Enhanced Vertical Line */}
                                    <div className="absolute right-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-sm"></div>

                                    <div className="space-y-16">
                                        {missionPoints.map((point, index) => (
                                            <div key={index} className="relative">
                                                {/* Enhanced Number Circle */}
                                                <div className="absolute -right-8 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white z-10">
                                                    {index + 1}
                                                </div>

                                                {/* Enhanced Content Card */}
                                                <div className="bg-gradient-to-br from-blue-50 to-white sm:p-8 p-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border max-h-44 min-h-44 h-44 border-blue-100">
                                                    <h3 className="lg:text-[1.1rem] text-[1.1rem] md:text-[1.35rem] font-bold text-blue-900 sm:mb-4 mb-1 lg:mb-1.5 leading-[1.1]">
                                                        {point.title}
                                                    </h3>
                                                    <p className="text-gray-700 md:text-sm leading-relaxed text-[0.775rem] lg:text-[0.8.5rem]">
                                                        {point.description}
                                                    </p>
                                                    <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div>
        </>
    )
}

export { VisonAndMission }