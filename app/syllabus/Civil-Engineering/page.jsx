import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [
    {
        title: "Under Graduation",
        courseName: "",
        results: [
            { id: 1, description: "UG Syllabus 2023", downloadUrl: "/syllabus/civil/UG/BTech-CE-2023.pdf" },
            { id: 2, description: "UG Syllabus 2021", downloadUrl: "/syllabus/civil/UG/B.Tech-CE-2021.pdf" },
            { id: 3, description: "UG Syllabus 2018", downloadUrl: "/syllabus/civil/UG/B.Tech-CE-2018.pdf" },
            { id: 4, description: "UG Syllabus 2011", downloadUrl: "/syllabus/civil/UG/B.Tech-CE-2011.pdf" },

        ]
    },
    {
        title: "Post Graduation",
        courseName: "",
        results: [
            { id: 1, description: "PG Syllabus-2016", downloadUrl: "/syllabus/civil/PG/M.Tech-CE-2016.pdf" },

        ]
    },
    {
        title: "First Year Syllabus",
        courseName: "",
        results: [
            { id: 1, description: "PG Syllabus-2016", downloadUrl: "/syllabus/First-Year-Syllabus/B.Tech (1st and 2nd Semester) Batch 2025 & Onwards.pdf" },

        ]
    },


]
const page = () => {
    return (
        <SyllabusLayout
            resultsData={resultsData}
            routeName={'Civil-Engineering'}
            departmentNameForNav={"Civil Engineering"}
        />
    )
}

export default page