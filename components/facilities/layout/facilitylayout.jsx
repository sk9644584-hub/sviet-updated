
"use client"
import { Sidebar } from "../Sidebar"
import Slider from "./Slider"


function FacilitiesLayout({
    slug,
    aboutFacility,
}) {
    return (
        <div className="flex min-h-screen flex-col">

            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">
                                <div className="px-6 py-6 ">
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        About <span className="text-orange-400">
                                            {aboutFacility.title}
                                        </span>
                                    </h3>
                                </div>
                                <Slider aboutFacility={aboutFacility} />


                                <div
                                    id="about-department"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                        {aboutFacility.content.length > 0 && aboutFacility.content.map((about, index) => (
                                            <p key={index} className="text-justify">
                                                {about}
                                            </p>
                                        ))}

                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* Left Sidebar - Navigation */}
                        <Sidebar slug={slug} departmentNameForNav={"Facilities"} />
                    </div>
                </div>
            </main >

        </div >
    )
}

export { FacilitiesLayout }