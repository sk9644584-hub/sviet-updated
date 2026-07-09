import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [
    {
        title: "Under Graduation",
        courseName: "Bachelor of Hotel Management & Catering Technology",
        results: [
            { id: 1, description: "UG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/Hotel-Mngmnt/Syllabus/BHMCT-2018.pdf" },
        ]
    },
    {
        title: "Under Graduation",
        courseName: "Bachelor of Vocation (Hospitality & Catering Management)",
        results: [
            { id: 1, description: "UG Syllabus 2025", downloadUrl: "https://static.shubhampf.cloud/syllabus/Hotel-Mngmnt/Syllabus/B.Voc_.-Hospitality-and-Catering-Management-Batch-2025.pdf" },
            { id: 2, description: "UG Syllabus 2019", downloadUrl: "https://static.shubhampf.cloud/syllabus/Hotel-Mngmnt/Syllabus/B_Voc_%20Hospitality%20&%20Catering%20Management%20Batch%202019.pdf" },
        ]
    },
    {
        title: "Under Graduation",
        courseName: "Bachelor of Science in Nutrition & Dietetics",
        results: [
            { id: 1, description: "UG Syllabus 2025", downloadUrl: "https://static.shubhampf.cloud/syllabus/Hotel-Mngmnt/Syllabus/B.Sc_.-Hons-Nutrition-and-Dietetics-2nd-sem.-2025-onwards.pdf" },
            { id: 2, description: "UG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/Hotel-Mngmnt/Syllabus/B.Sc_.-HonsNutrition-and-Dietitics%202018.pdf" },
        ]
    },
    {
        title: "Post Graduation",
        courseName: "Bachelor of Science in Nutrition & Dietetics",
        results: [
            { id: 1, description: "PG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/Hotel-Mngmnt/Syllabus/MHMCT%20Batch%202018.pdf" },
            { id: 2, description: "PG Syllabus 2013", downloadUrl: "https://static.shubhampf.cloud/syllabus/Hotel-Mngmnt/Syllabus/MHMCT%20Batch%202013.pdf" },
        ]
    },



]
const page = () => {
    return (
        <SyllabusLayout
            resultsData={resultsData}
            departmentNameForNav={"Hotel Management"}
            routeName={"Hotel-Management"}
        />
    )
}

export default page