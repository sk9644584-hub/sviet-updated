import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
const latestPlacementDrive = [
   
    {
        id: 2,
        imgSrc: "/Recruiters/ocean.2fd7a9db.png",
        title: "Ocean Technologies Pvt. Ltd.",
        description: "Ocean Technologies Pvt. Ltd. makes waves at SVIET campus recruitment drive!Exciting opportunities unfolded for B.Tech and diploma students in EE, ME, CSE, ECE, Civil, and MBA (2024) batches. ",
        date: "01st December 2023"

    },
    {
        id: 3,
        imgSrc: "/Recruiters/Clicklabs.002df006.webp",
        title: "Click Labs",
        description: "SVIET organized a successful placement drive today for the students of MBA and B.Tech CSE | Batch 2025 passing out by reputed company Click Labs!",
        date: "22nd March 2024"

    },
    {
        id: 4,
        imgSrc: "/Recruiters/value.1541ddae.png",
        title: "Value Prospect Consulting",
        description: "Value Prospect Consulting’s Campus Drive at SVIET: 15 Students Land Dream Jobs! Mr. Pratik guides candidates through a rigorous 4-phase selection process. A big opportunity for the 2023, 2024, and 2025 batches.",
        date: "04th April 2024"

    },
    {
        id: 5,
        imgSrc: "/Recruiters/placementday.2b5fc03a.jpg",
        title: "Placement Day",
        description: "After an incredible Placement Day event at SVIET, we’re thrilled to have hosted over 200 students from various colleges and universities across different states, including Government polytechnic colleges in Khuni Majra, Meham.",
        date: "16th May 2024"
    }, {
        id: 6,
        "title": "Global Futures Summit 2024",
        "description": "Dive into our industry panel session covering market trends and cutting-edge technology! These snapshots capture the dynamic exchange between industry and academia, shaping tomorrow’s tech leaders. Join the fusion.",
        "date": "23rd March 2024",
        imgSrc: "/Recruiters/summit.a2de6a4f.webp"
    },

    {
        id: 8,
        imgSrc: "/Recruiters/asdf.jpeg",
        "title": "24x7 Software, Pune - On-Campus Placement Drive",
        "description": "Training & Placement Cells, SVIET successfully organized an on-campus placement drive for B.Tech CSE Batch 2025, in collaboration with 24x7 Software, Pune. With over 70 student... participating.",
        "date": "24th September 2024"
    },
    {
        id: 9,
        imgSrc: "/Recruiters/asdfasd.jpeg",
        "title": "Skillkart Placement Drive - SVIET",
        "description": "The Skillkart Placement Drive at SVIET was a huge success! With over 60+ enthusiastic students from B.Tech (CSE), MCA and MBA (Batch 2025) participating, the day was filled with excitement and",
        "date": "04st October 2024"
    },
    {
        id: 10,
        imgSrc: "/Recruiters/l&t.jpeg",
        "title": "L & T",
        title: "Strategic Collaboration with L&T EduTech",
        description: "L&T EduTech team visited SVIET and signed a Memorandum of Understanding (MoU), paving the way for collaborative initiatives, industry-aligned training, and enhanced career opportunities for our students."

    }
]
import React from 'react'
import { PlacementsSidebar } from './PlacementsSidebar'

const Gallery = () => {
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


                                {/* vision */}
                                <div
                                    id="Research"
                                    className="p-6 border-b border-gray-200"
                                >

                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">

                                        <GalleryItems />

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

export default Gallery



const GalleryItems = () => {
    return (
        <section className="py-4 bg-white">
            <div className="mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        Latest Placement Drives
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Glimpses from our recent successful recruitment events
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {latestPlacementDrive.map((item) => (
                        <Card key={item.id} className="shadow-lg py-0 overflow-hidden hover:shadow-xl transition-all duration-300">
                            <img
                                loading="lazy"
                                src={item.imgSrc || "/placeholder.svg"}
                                alt="Placement Drive"
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <CardContent className="p-6 pt-0">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 text-sm mb-4">
                                    {item.description}
                                </p>
                                {item.date && <Badge className="bg-blue-100 text-blue-800">
                                    {item.date}
                                </Badge>}
                            </CardContent>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    )
}

