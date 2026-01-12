import React from 'react'
import { PlacementsSidebar } from './PlacementsSidebar'
import { trainingPrograms } from './items'
import { Card, CardContent } from '../ui/card'
const PlacementsTrainingLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* <div className='w-full bg-black/50 text-white p-4 sm:py-5 md:px-8 lg:py-6 lg:px-16 '>
                <h3 className='text-lg font-semibold md:text-2xl'>
                    Placements & Career Development
                </h3>
            </div> */}


            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">
                                {/* About Department Section */}
                                <div
                                    id="overview"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Placement Training                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                        <p className="text-justify">
                                            Our placement training programs prepare students to confidently step into the professional world with the right mix of skills, knowledge, and experience.
                                        </p>

                                        <div className="grid lg:grid-cols-3 px-4 sm:px-0 sm:grid-cols-2  pt-2  gap-10">
                                            {trainingPrograms.map((program, index) => {
                                                const Icon = program.icon
                                                return (
                                                    <Card
                                                        key={index}
                                                        className="shadow-lg !p-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                                    >
                                                        <CardContent className="p-6 py-8 text-center">
                                                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                                <Icon className="h-8 w-8 text-yellow-600" />
                                                            </div>
                                                            <h3 className="text-xl font-bold text-blue-900 mb-3">
                                                                {program.title}
                                                            </h3>
                                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                                {program.description}
                                                            </p>
                                                        </CardContent>
                                                    </Card>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Left Sidebar - Navigation */}
                        <PlacementsSidebar />
                    </div>
                </div>
            </main>

        </div>
    )
}

export default PlacementsTrainingLayout

