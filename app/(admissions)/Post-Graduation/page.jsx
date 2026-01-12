import { PgLayout } from '@/components/Admissions'
import React from 'react'
export const metadata = {
    title: "Post Graduation"
}

const programs = [
    {
        id: 1,
        title: "M.Tech",
        data: [
            { name: "COMPUTER SCIENCE AND ENGINEERING", href: "/academics/Computer-Science-And-Engineering" },
            { name: "ELECTRONICS & COMMUNICATION ENGINEERING", href: "/academics/Electronics-And-Communication-Engineering" },
            { name: "MECHANICAL ENGINEERING", href: "/academics/Mechanical-Engineering" },
            { name: "CIVIL ENGINEERING", href: "/academics/Civil-Engineering" }
        ],
        eligibilityCriteria: [

            {
                id: 1234123,
                title: "Postgraduate Admission",
                description: "Eligibility criteria for admission into M.tech Programs.",
                requirements: [
                    "Passed BE/B.Tech or equivalent examination",
                    "Minimum 50% marks in the qualifying exam (45% for SC/ST/SEBC candidates)"
                ],
                color: "from-orange-400 to-orange-300",
            },
        ]
        ,
        modeOfAdmission: `Admission is typically based on entrance exams and/or academic performance. Candidates must apply through the designated admission portal.`,
        color: "bg-blue-400 ",
        borderColor: "border-blue-300",
    },
    {
        id: 2,
        title: "Master of Computer Application (MCA)",
        data: [],
        eligibilityCriteria: [

            {
                id: 12341234,
                title: "Postgraduate Admission",
                description: "Eligibility criteria for admission into MCA Programs.",
                requirements: [
                    "All those candidate who have any recognized Bachelor’s Degree of minimum 3 years duration in any discipline."
                ],
                color: "from-orange-400 to-orange-300",
            },
        ], modeOfAdmission: `Admission is typically based on entrance exams and/or academic performance. Candidates must apply through the designated admission portal.`,
        color: "bg-blue-400 ",
        borderColor: "border-blue-300",
    },
    {
        id: 3,
        title: "Master of Business Administration(MBA)",
        data: [],
        eligibilityCriteria: [

            {
                id: 12313,
                title: "Postgraduate Admission",
                description: "Eligibility criteria for admission into Master of Business Administration(MBA) Programs.",
                requirements: [
                    "Passed any recognized bachelor's degree of minimum three years duration with Mathematics / Statistics / Business Mathematics / Business Statistics / Quantitative Techniques as a compulsory, optional, or additional subject at 10+2 or graduation level.",
                    "Passed BCA course of minimum three years duration from any recognized university."
                ],
                color: "from-orange-400 to-orange-300",
            },
        ],
        modeOfAdmission: `Admission is typically based on entrance exams and/or academic performance. Candidates must apply through the designated admission portal.`,
        color: "bg-blue-400 ",
        borderColor: "border-blue-300",
    },]
const page = () => {
    return (
        <>
            <PgLayout
                title={"Post Graduation"}
                programs={programs}
            />
        </>
    )
}

export default page


