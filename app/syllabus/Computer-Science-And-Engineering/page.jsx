import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [
    {
        title: "Under Graduation",
        courseName: "Computer Science & Engineering",
        results: [
            { id: 1, description: "UG Syllabus 2023", downloadUrl: "/syllabus/CSE/UG/B.Tech-CSE-2023.pdf" },
            { id: 2, description: "UG Syllabus 2021", downloadUrl: "/syllabus/CSE/UG/B.Tech-CSE-2021.pdf" },
            { id: 3, description: "UG Syllabus 2018", downloadUrl: "/syllabus/CSE/UG/B.Tech-CSE-2018.pdf" },
            { id: 4, description: "UG Syllabus 2012", downloadUrl: "/syllabus/CSE/UG/B.Tech-CSE-2012.pdf" },
            { id: 5, description: "UG Syllabus 2011", downloadUrl: "/syllabus/CSE/UG/B.Tech-CSE-2011.pdf" },
            { id: 6, description: "UG Syllabus 2003", downloadUrl: "/syllabus/CSE/UG/B.Tech-CSE-2003.pdf" },

        ]
    },
    {
        title: "Under Graduation",
        courseName: "Computer Science & Design",
        results: [
            { id: 1, description: "UG Syllabus 2023", downloadUrl: "/syllabus/AI/UG/B.Tech-AI-2025.pdf" },


        ]
    },
    {
        title: "Under Graduation",
        courseName: "Artificial Intelligence",
        results: [
            { id: 1, description: "UG Syllabus 2023", downloadUrl: "/syllabus/CSD/UG/B.Tech-CSD-2023.pdf" },


        ]
    },
    {
        title: "Post Graduation",
        courseName: "",
        results: [
            { id: 1, description: "PG Syllabus 2018", downloadUrl: "/syllabus/CSE/PG/M.Tech-CSE-2018.pdf" },
            { id: 2, description: "PG Syllabus 2015", downloadUrl: "/syllabus/CSE/PG/M.Tech-CSE-2015.pdf" },
            { id: 3, description: "PG Syllabus 2004", downloadUrl: "/syllabus/CSE/PG/M.Tech-CSE-2004.pdf" },

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
            routeName={'Computer-Science-And-Engineering'}
            departmentNameForNav={"Computer Science & Engineering"}
        />
    )
}

export default page