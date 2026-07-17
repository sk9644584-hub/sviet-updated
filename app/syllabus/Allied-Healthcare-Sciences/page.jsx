import { SyllabusLayout } from '@/components/syllabus'
import React from 'react'
const resultsData = [

    {
        title: "Under Graduation",
        courseName: "B.Sc. (Medical Lab Sciences)",
        results: [
            { id: 1, description: "UG Syllabus 2024", downloadUrl: "https://static.shubhampf.cloud/syllabus/ahs/UG/B.Sc.%20Medical%20Lab%20Science/B.Sc.%20Medical%20Laboratory%20Science%20Syllabus%202024.pdf" },
            { id: 2, description: "UG Syllabus 2018", downloadUrl: "https://static.shubhampf.cloud/syllabus/ahs/UG/B.Sc.%20Medical%20Lab%20Science/B.Sc.%20Medical%20Lab%20Science%20Syllabus%202018.pdf" },
        ]
    },
    {
        title: "Under Graduation",
        courseName: "B.Sc. (Radiology & Imaging Technology)",
        results: [
            { id: 1, description: "UG Syllabus 2024", downloadUrl: "https://static.shubhampf.cloud/syllabus/ahs/UG/B.Sc.%20Radiology%20Imaging%20Technology/BScRadiologyImagingTechnologySyllabus2024.pdf" },
            { id: 2, description: "UG Syllabus 2021", downloadUrl: "https://static.shubhampf.cloud/syllabus/ahs/UG/B.Sc.%20Radiology%20Imaging%20Technology/BScRadiologyImagingTechnologySyllabus%202021.pdf" },
        ]
    },
    {
        title: "Under Graduation",
        courseName: "B.Sc. (Operation Theatre Technology)",
        results: [
            { id: 1, description: "UG Syllabus 2019", downloadUrl: "https://static.shubhampf.cloud/syllabus/ahs/UG/B.Sc.%20Operation%20Theatre%20Technology/B.Sc-Operation-theatre-Technology%20Syllabus%202019.pdf" },
        ]
    },
    {
        title: "Under Graduation",
        courseName: "B.Sc. (Cardiac Care Technology)",
        results: [
            { id: 1, description: "UG Syllabus 2021", downloadUrl: "https://static.shubhampf.cloud/syllabus/ahs/UG/B-Sc-Cardiac-Care-Technology/B-Sc-Cardiac-Care-Technology-Syllabus%202021.pdf" },
        ]
    },
    {
        title: "Post Graduation",
        courseName: "M.Sc. (Medical Microbiology)",
        results: [
            { id: 1, description: "PG Syllabus 2021", downloadUrl: "https://static.shubhampf.cloud/syllabus/ahs/PG/M.Sc.%20MEDICAL%20Microbiology/M.Sc_.-Medical-Microbiology%20Syllabus%202021.pdf" },
        ]
    },
    {
        title: "Post Graduation",
        courseName: "M.Sc. (Radiology and Imaging Technology)",
        results: [
            { id: 1, description: "PG Syllabus 2021", downloadUrl: "https://static.shubhampf.cloud/syllabus/ahs/PG/M.Sc.%20RADIOLOGY%20IMAGING%20TECHNOLOGY/M.Sc.%20RADIOLOGY%20IMAGING%20TECHNOLOGY%20Syllabus%202021.pdf" },
        ]
    },
]
const page = () => {
    return (
        <SyllabusLayout
            showFaculty={false}
            resultsData={resultsData}
            departmentNameForNav={"Allied and Healthcare Sciences"}
            routeName={"Allied-Healthcare-Sciences"}
        />
    )
}

export default page