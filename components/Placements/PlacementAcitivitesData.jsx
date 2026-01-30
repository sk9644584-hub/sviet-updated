"use client"
import React from "react"
import Image from "next/image"

const PlacementAcitivitesData = () => {
    const cardsData = [
        {
            title: " Grazitti Interactive",
            description: "The Department of Computer Applications organized an industrial visit to Grazitti Interactive in Panchkula for MCA students (Batch 2023 and 2024). This visit provided industry exposure, helping students gain insights into real-world applications and interact with professionals.",
            image: "https://utfs.io/f/1V3V2P4kpAumhiGryqj1xiCWTIEqDGVAyUHtNgve4dfROn83"
        },
        {
            title: "Wonder System Pvt. Ltd.",
            description: "On 28th March 2025, the ECE/EE Department organized an enriching industrial visit to Wonder System Pvt. Ltd., offering students real-world insights and hands-on experience in the industry. Learning beyond classrooms, shaping future innovators!",
            image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumGHFUrHIoeyaO1d7xYQMuBsK0zrR9WmSiLvEN"
        },
        {
            title: "Pisoft Informatics Pvt. Ltd.",
            description: "Our Super 60 Batch 2023 had an enriching industrial visit to Pisoft Informatics, gaining insights into IT and software development. They explored cutting-edge technologies, learned from industry experts, and saw how innovative solutions are created.",
            image: "https://utfs.io/f/1V3V2P4kpAumL0d1brpJTjhB1safN9YzRtPmg236DXq5uS4C"
        },
        {
            title: "RDC Plant, Mohali",
            description: "On 6th September 2024, 35 B.Tech Civil Engineering students visited the RDC Plant, Mohali, with two faculty members. This industrial visit provided practical insights into ready-mix concrete production and quality control, bridging the gap between classroom learning and real-world applications.",
            image: "https://utfs.io/f/1V3V2P4kpAumI1FBk4R21jqluvKkFoRaDpPfCGTtxewIs74z"
        },
        {
            title: "HF Super Chanakya Dairy Products",
            description: "On 9th August 2024, 42 Commerce and Management students visited HF Super Chanakya Dairy Products. Guided by Mr. Vivek Saxena and Mr. Bhawar Singh Shekhawat, they gained insights into production and operations.",
            image: "https://utfs.io/f/1V3V2P4kpAumCa51NnAi6EeD1wHIp3zVSgTXJyWtuZ2hdcix",
        },
        {
            title: "Kandhari Beverages Pvt. Limited",
            description: "On 3rd September 2024, SVIET Commerce and Management students visited Kandhari Beverages Pvt. Ltd. to learn about plant operations, from procurement to packaging. Thanks to the team for their guidance and for addressing student queries.",
            image: "https://utfs.io/f/1V3V2P4kpAumDlHvXuac3imC02hJzTjuAPrdk64eXYnEVlBg"
        },

        {
            title: "Green Concrete R.M.C Plant",
            description: "The Civil Engineering Department arranged a visit to the Green Concrete R.M.C Plant in Tangori, Mohali, for firsthand experience in concrete production and sustainability.",
            image: "https://www.sviet.ac.in/_next/static/media/RMC.aa4b0065.webp",
        },

        {
            title: "Reliance Mall, Bestech Square, Mohali",
            description: "Students visited Reliance Mall, Mohali, to explore market dynamics. Guided by Mr. Amandeep, they learned about segmentation, targeting, and positioning, gaining insights into consumer behavior and retail tactics. ",
            image: "https://www.sviet.ac.in/_next/static/media/jio.c2a4e660.jpg",
        },

        {
            title: "Electrical Vehicle Expo",
            description: "Visit for Mechanical Engineering Students was organised to Electrical Vehicle Expo-2023 at Exhibition Ground Sector-34 Chandigarh",
            image: "https://static.shubhampf.cloud/Recruiters/sdasd.jpeg"
        },
        {
            title: "Guru Nanak Group of Industries, Rajpura",
            description: `They visited Guru Nanak Group of Industries, Rajpura today. Along with two faculty members, 25 students explored advanced techniques like CNC Milling Machines and modern casting processes. `,
            image: "https://utfs.io/f/1V3V2P4kpAum7E7dQyCMctTlLnUsdGg6eRqzSorOXmFha9xE",
        },

        {
            title: "Survey camp in Manali",
            description: "Students of B.Tech Civil Engineering | Batch 2022 enjoyed an educational survey camp in Manali, applying classroom knowledge in real-world settings. Here's a glimpse of their journey and efforts!  ",
            image: "https://www.sviet.ac.in/_next/static/media/manali.99404ceb.webp",
        },





    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="relative h-40 w-full">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-sm">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlacementAcitivitesData

