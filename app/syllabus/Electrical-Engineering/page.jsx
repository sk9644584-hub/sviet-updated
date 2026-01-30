import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [
    {
        title: "Under Graduation",
        courseName: "",
        results: [
            { id: 1, description: "UG Syllabus 2023", downloadUrl: "https://static.shubhampf.cloud/syllabus/ee/ug/B.Tech-EE-2023.pdf" },
            { id: 2, description: "UG Syllabus 2021", downloadUrl: "https://static.shubhampf.cloud/syllabus/ee/ug/B.Tech-EE-2021.pdf" },
            { id: 3, description: "UG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/ee/ug/B.Tech-EE-2018.pdf" },
            { id: 4, description: "UG Syllabus 2011", downloadUrl: "https://static.shubhampf.cloud/syllabus/ee/ug/B.Tech-EE-2011.pdf" },

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
            departmentNameForNav={"Electrical Engineering"}
            routeName={"Electrical-Engineering"}
        />
    )
}

export default page