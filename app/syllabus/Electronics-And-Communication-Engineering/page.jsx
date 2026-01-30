import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [
    {
        title: "Under Graduation",
        courseName: "",
        results: [
            { id: 1, description: "UG Syllabus 2023", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/UG/B.Tech-ECE-2023.pdf" },
            { id: 2, description: "UG Syllabus 2021", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/UG/B.Tech-ECE-2021.pdf" },
            { id: 3, description: "UG Syllabus 2019", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/UG/B.Tech-ECE-2019.pdf" },
            { id: 4, description: "UG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/UG/B.Tech-ECE-2018.pdf" },
            { id: 5, description: "UG Syllabus 2011", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/UG/B.Tech-ECE-2011.pdf" },
            { id: 6, description: "UG Syllabus 2003", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/UG/B.Tech-ECE-2003.pdf" },

        ]
    },
    
    {
        title: "Post Graduation",
        courseName: "",
        results: [
            { id: 1, description: "PG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/PG/M.Tech ECE 2018.pdf" },
            { id: 2, description: "PG Syllabus 2016", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/PG/M.Tech ECE 2016.pdf" },
            { id: 3, description: "PG Syllabus 2004", downloadUrl: "https://static.shubhampf.cloud/syllabus/ece/PG/M.Tech ECE 2004.pdf" },

        ]
    },
    {
        title: "First Year Syllabus",
        courseName: "",
        results: [
            { id: 1, description: "First Year Syllabus", downloadUrl: "https://static.shubhampf.cloud/syllabus/First-Year-Syllabus/B.Tech1stand2ndSemesterBatch2025.pdf" },

        ]
    },


]
const page = () => {
    return (
        <SyllabusLayout
            resultsData={resultsData}
            departmentNameForNav={"Electronics & Communication Engineering"}
            routeName={"Electronics-And-Communication-Engineering"}
        />
    )
}

export default page