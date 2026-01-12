import { UgLayout } from '@/components/Admissions'
import React from 'react'
export const metadata = {
    title: "Under Graduation"
}
const eligibilityCriteria = [
    {
        id: 1,
        title: "10+2 Examination Route",
        description: "Standard academic pathway for B.Tech admission",
        requirements: [
            "Passed 10+2 examination with Physics and Mathematics as compulsory subjects",
            "One of the following subjects: Chemistry/Biotechnology/Computer Science/Biology",
        ],
        color: "bg-blue-400 ",
        borderColor: "border-blue-300",
    },
    {
        id: 2,
        title: "Diploma Route (Lateral Entry)",
        description: "For diploma holders seeking lateral entry to B.Tech",
        requirements: [
            "Passed Diploma in Engineering/Technology with 50% marks in aggregate (40% for SC/ST)",
            "Candidates who have only passed Diploma in any branch of Engineering/Technology are eligible",
            "Diploma from recognized institutions:",
            "• Punjab State Board of Technical Education, Chandigarh",
            "• Sant Longowal Institute of Engineering and Technology (SLIET)",
            "• Any other recognized State Board of Technical Education",
        ],
        color: "bg-blue-400 ",
        borderColor: "border-blue-300",
    },
    {
        id: 3,
        title: "Certificate Course Route",
        description: "Alternative pathway through specialized certification",
        requirements: [
            "Completed two years certificate course from Sant Longowal Institute of Engineering and Technology, Longowal (SLIET)",
        ],
        color: "bg-blue-400 ",
        borderColor: "border-blue-300",
    },
    {
        id: 4,
        title: "B.Sc Degree Route (Lateral Entry)",
        description: "For B.Sc degree holders seeking lateral entry to B.Tech",
        requirements: [
            "Passed B.Sc Degree in any discipline",
            "Minimum 50% marks in aggregate (40% for SC/ST candidates)",
        ],
        color: "bg-blue-400 ",
        borderColor: "border-blue-300",
    },
]
const data = [
    { name: "COMPUTER SCIENCE AND ENGINEERING", href: "/academics/Computer-Science-And-Engineering" },
    { name: "COMPUTER SCIENCE AND DESIGN", href: "/academics/Computer-Science-And-Engineering" },
    { name: "ARTIFICIAL INTELLIGENCE", href: "/academics/Computer-Science-And-Engineering" },
    { name: "ELECTRONICS & COMMUNICATION ENGINEERING", href: "/academics/Electronics-And-Communication-Engineering" },
    { name: "ELECTRICAL ENGINEERING", href: "/academics/Electrical-Engineering" },
    { name: "MECHANICAL ENGINEERING", href: "/academics/Mechanical-Engineering" },
    { name: "CIVIL ENGINEERING", href: "/academics/Civil-Engineering" }
]

const page = () => {
    return (
        <>
            <UgLayout
                title={"Under Graduation"}
                overview={data}
                eligibilityCriteria={eligibilityCriteria}
            />
        </>
    )
}

export default page