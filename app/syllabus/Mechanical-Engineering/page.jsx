import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [
    {
        title: "Under Graduation",
        courseName: "",
        results: [
            { id: 1, description: "UG Syllabus 2021", downloadUrl: "/syllabus/me/UG/BTech-ME-2021.pdf" },
            { id: 2, description: "UG Syllabus 2018", downloadUrl: "/syllabus/me/UG/B.Tech-ME-2018.pdf" },
            { id: 3, description: "UG Syllabus 2011", downloadUrl: "/syllabus/me/UG/B.Tech-ME-2011.pdf" },
            { id: 4, description: "UG Syllabus 2003", downloadUrl: "/syllabus/me/UG/2003.pdf" },

        ]
    },

    {
        title: "Post Graduation",
        courseName: "",
        results: [
            { id: 1, description: "PG Syllabus 2017", downloadUrl: "/syllabus/me/PG/M.Tech-ME-2017.pdf" },
            { id: 2, description: "PG Syllabus 2004", downloadUrl: "/syllabus/me/PG/M.Tech-ME-2004.pdf" },

        ]
    },
    {
        title: "First Year Syllabus",
        courseName: "",
        results: [
            { id: 1, description: "First Year Syllabus", downloadUrl: "/syllabus/First-Year-Syllabus/B.Tech (1st and 2nd Semester) Batch 2025 & Onwards.pdf" },

        ]
    },


]
const page = () => {
    return (
        <SyllabusLayout
            resultsData={resultsData}
            departmentNameForNav={"Mechanical Engineering"}
            routeName={"Mechanical-Engineering"}
        />
    )
}

export default page