import React from 'react'
import { PlacementsSidebar } from './PlacementsSidebar'
import { aboutDepartment } from './items'
import PlacementRecord from './PlacementRecord'
import Image from 'next/image'
import PlacementAcitivitesData from './PlacementAcitivitesData'
const PlacementsActivities = () => {
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
                                        Visits, Training, Guidance and a lot more
                                    </h2>
                                    <div className="space-y-4 ">
                                        <PlacementAcitivitesData />

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

export default PlacementsActivities



